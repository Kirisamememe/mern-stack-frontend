import { fetchCollect } from '../../apiHelper'
import * as Types from "../../types"

export const CollectController = ({ isCollected, setIsCollected, setCollects, params, userId }: Types.CollectControllerType) => {

    const handleCollect = async () => {
        // Optimistic UI
        setIsCollected(prevCollected => !prevCollected)
        setCollects(prevCollects => isCollected ? prevCollects - 1 : prevCollects + 1)
        
        try {
            const action = isCollected ? 'deCollect' : 'collect'
            const itemId = params.id
            const response = await fetchCollect({itemId, userId, action})
            // const data = await response.json();
        
            // 失敗した時、UIを元に戻す
            if (response.status !== 200) {
                console.log("失敗")
                setCollects(prevCollects => isCollected ? prevCollects + 1 : prevCollects - 1)
                setIsCollected(prevCollected => !prevCollected)
                // console.log(`2: ${isLiked}`)
            }
        } catch (error) {
            setCollects(prevCollects => isCollected ? prevCollects + 1 : prevCollects - 1)
            setIsCollected(prevCollected => !prevCollected)
            // console.log(`3: ${isLiked}`)
            console.error('Like failed', error)
        }
    };
    return handleCollect;
};