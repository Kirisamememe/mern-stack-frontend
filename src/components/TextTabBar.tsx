import TextTab from "./TextTab"
import * as Types from "../types"

const TextTabBar = ({textTabItem}: Types.TextTabItemTypeT) => {
    return (
        <div className="textTabBar">
            {textTabItem.map((item, index) => (
                <TextTab key={index} isSelected={item.isSelected} text={item.text} event={item.event}/>
            ))}
        </div>
    )
}

export default TextTabBar