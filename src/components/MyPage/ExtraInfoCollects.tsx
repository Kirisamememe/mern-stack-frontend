import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { useAuth } from "../../utils/AuthContext"
import PostedItem from "../../components/MyPage/PostedItem"
import { FormatDatePro } from "../FormartDate"
import { fetchItem } from '../../apiHelper'
import BlockTitle from "../BlockTitle"
// import * as Types from "../../types"

const ExtraInfoCollects = ({ collects }:{ collects: string[] }) => {
    const [postsInfo, setPostsInfo] = useState<{itemId: string, title: string, mainBody: string, image: string, date: string, likeCnt: number, cmtCnt: number}[]>([])

    useEffect(() => {
        const getPostedItemsInfo = async ( posts: string[] ) => {
            try {
                const response = await Promise.all(posts.map(post => fetchItem(post, ["_id", "title", "mainBody", "image", "date", "like", "comment"])))

                const jsonResponse = await Promise.all(response.map(res => res.json()))
                console.log(jsonResponse)

                setPostsInfo(jsonResponse.map(res => ({
                    itemId: res.itemInfo._id,
                    title: res.itemInfo.title,
                    mainBody: res.itemInfo.mainBody,
                    image: res.itemInfo.image,
                    date: res.itemInfo.date,
                    likeCnt: res.itemInfo.like.length,
                    cmtCnt: res.itemInfo.comment.length
                })))

            } catch (error) {
                // alert("ユーザー情報を取得できませんでした")
            }
        }
        getPostedItemsInfo(collects)
    },[collects])


    return (
        <div className="extraInfoCollects fadeIn">
            <BlockTitle text="コレクト"/>
            <div className="collects">
                {postsInfo.map(post => (
                    <PostedItem
                        key={post.itemId}
                        isCollect={true}
                        itemId={post.itemId}
                        title={post.title}
                        mainBody={post.mainBody}
                        image={post.image}
                        date={FormatDatePro(new Date(post.date))}
                        likeCnt={post.likeCnt}
                        cmtCnt={post.cmtCnt}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExtraInfoCollects