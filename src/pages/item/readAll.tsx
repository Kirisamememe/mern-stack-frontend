import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FormatDatePro } from "../../components/FormartDate"
import * as Types from "../../types"
import { fetchBase } from '../../apiHelper'


const ReadAll = () => {
    const [allItems, setAllItem] = useState<Types.ReadAllType>()
    const [maxItems, setMaxItems] = useState(20)
    const [isLoaded, setIsLoaded] = useState(false)

    //useEffect：ページを開いたら自動で実行される
    useEffect(() => {
        document.body.classList.add('homePageBackground')

        const getAllItems = async () => {
            const response = await fetchBase()
            const jsonResponse = await response.json()
            setAllItem(jsonResponse)
            setIsLoaded(true)
        }
        getAllItems()

        return () => {
            document.body.classList.remove('homePageBackground')
        }
    },[])
    //この[]はuseEffectの繰り返しを止める


    return (
        <>
            <div className={`grid_container_in ${isLoaded ? "fadeIn" : ""}`}>
                {allItems && allItems.allItems.slice(0, maxItems).map(item => {
                    const utcDate = new Date(item.date) // これがMongoDBから取得したUTC日付と仮定
                    const jstDate = FormatDatePro(utcDate) // ローカライズされた文字列に変換
                    return (
                        <Link to={`/item/${item._id}`} key={item._id} className="card">
                            <img src={item.image} alt="item" />
                            <div className="cardInfo">
                                <div className="texts_area">
                                    <h2>{item.title.length > 28 ? `${item.title.substring(0, 28)}…` : item.title}</h2>
                                    <p className="body15_G2_h150">{item.mainBody.length > 55 ? `${item.mainBody.substring(0, 55)}…` : item.mainBody}</p>
                                </div>
                                <div className="dateAndCollect">
                                    <h3>{jstDate}</h3>
                                    <div className="collect">
                                        <h3>{item.collect}</h3>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.57798 6.25087C7.50514 6.40877 7.3555 6.5175 7.18282 6.53797L2.51693 7.09119C2.09324 7.14142 1.92308 7.66512 2.23633 7.9548L5.68594 11.1449C5.8136 11.263 5.87076 11.4389 5.83687 11.6094L4.92117 16.2179C4.83802 16.6364 5.2835 16.9601 5.65581 16.7517L9.75576 14.4567C9.9075 14.3717 10.0925 14.3717 10.2442 14.4567L14.3442 16.7517C14.7165 16.9601 15.1619 16.6364 15.0788 16.2179L14.1631 11.6094C14.1292 11.4389 14.1864 11.263 14.314 11.1449L17.7636 7.9548C18.0769 7.66511 17.9067 7.14142 17.483 7.09119L12.8171 6.53797C12.6445 6.5175 12.4948 6.40877 12.422 6.25087L10.454 1.9843C10.2753 1.59687 9.72466 1.59687 9.54595 1.9843L7.57798 6.25087ZM9.99998 4.58124L8.94006 6.87914C8.64873 7.51075 8.05016 7.94564 7.35943 8.02754L4.84646 8.32549L6.70436 10.0436C7.21504 10.5159 7.44367 11.2195 7.30811 11.9018L6.81493 14.3838L9.0231 13.1478C9.63005 12.808 10.3699 12.808 10.9769 13.1478L13.185 14.3838L12.6919 11.9018C12.5563 11.2195 12.7849 10.5159 13.2956 10.0436L15.1535 8.32549L12.6405 8.02754C11.9498 7.94564 11.3512 7.51075 11.0599 6.87914L9.99998 4.58124Z" fill="#A8ABB3"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            {allItems && allItems.allItems.length > maxItems && (
                <div style={{display: "flex", marginTop: "4rem", justifyContent: "center", alignItems: "center"}}>
                    <button style={{width: "30rem"}} onClick={() => setMaxItems(maxItems + 16)}>More</button>
                </div>
            )}
        </>
    )
}

export default ReadAll