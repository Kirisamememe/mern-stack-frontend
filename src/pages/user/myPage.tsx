import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// import { Link } from "react-router-dom"
// import { useAuth } from "../../utils/AuthContext"
import MyPageBG from "../../components/MyPage/MyPageBG"
import MyPageProfile from "../../components/MyPage/MyPageProfile"
// import PostedItem from "../../components/MyPage/PostedItem"
import PostedItemBlock from "../../components/MyPage/PostedItemBlock"
import TextTabBar from "../../components/TextTabBar"
import ExtraInfoCollects from "../../components/MyPage/ExtraInfoCollects"
import ExtraInfoFriends from "../../components/MyPage/ExtraInfoFriends"
import { NoItem } from "../../components/EmptyState"
import { fetchUser } from '../../apiHelper'
import * as Types from "../../types"

const MyPage = () => {
    // const { loginUser } = useAuth()
    const params = useParams() as Types.ParamsType

    const [userUpdated, setUserUpdated] = useState(false)

    const [isMe, setIsMe] = useState(params.id === localStorage.getItem("userId"))
    const [collectsArr, setCollectsArr] = useState([])
    const [friends, setFriends] = useState([])
    const [userProfile, setUserProfile] = useState<{name: string, avatar: string, signature: string, posts: string[], collect: [{itemId: string}], follow: string[], follower: string[]}>({
        name: "",
        avatar: "",
        signature: "",
        posts: [],
        collect: [{itemId: ""}],
        follow: [],
        follower: [],
    })

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [hideRight, setHideRight] = useState(false)

    const [scrollY, setScrollY] = useState(0)
    const metaTag = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement

    const handleScroll = () => {
        setScrollY(window.scrollY)
    }

    const updatePadding = () => {
        const element = document.querySelector('.container') as HTMLElement
        if (window.innerWidth <= 600) {
            element.style.setProperty('--globalPadding', '0rem')
        } else {
            element.style.setProperty('--globalPadding', '1.6rem')
        }
    }


    useEffect(() => {

        const getUserProfile = async () => {
            try {
                const response = await fetchUser(params.id)
                if (!response?.ok) {
                    alert("ユーザー情報を取得できませんでした")
                    return
                }
                const jsonResponse = await response.json()
                console.log(jsonResponse)

                setUserProfile({
                    name: jsonResponse.userData.name,
                    avatar: jsonResponse.userData.avatar,
                    signature: jsonResponse.userData.signature,
                    posts: jsonResponse.userData.posts,
                    collect: jsonResponse.userData.collect,
                    follow: jsonResponse.userData.follow,
                    follower: jsonResponse.userData.follower
                })

                setCollectsArr(jsonResponse.userData.collect.map((item: {itemId: string}) => item.itemId))

                if (isMe) {
                    const follower = new Set(jsonResponse.userData.follower)
                    const friends = jsonResponse.userData.follow.filter((user: string) => follower.has(user))
                    setFriends(friends)
                }
                else {
                    const response = await fetchUser(localStorage.getItem("userId"),["follow"])
                    if (!response?.ok) {
                        alert("ユーザー情報を取得できませんでした")
                    }
                    else {
                        const jsonResponse_me = await response.json()
                        const myFollow = new Set(jsonResponse_me.userData.follow)
                        const friends = jsonResponse.userData.follow.filter((user: string) => myFollow.has(user))
                        console.log(myFollow)
                        console.log(`your:\n${jsonResponse.userData.follow.join('\n')}`)
                        setFriends(friends)
                    }
                }

            } catch (error) {
                alert("問題が発生しました")
            }
        }
        getUserProfile()
        setIsMe(params.id === localStorage.getItem("userId"))

    },[params.id, userUpdated, isMe])


    useEffect(() => {
        updatePadding()

        const handleResize = () => setWindowWidth(window.innerWidth)
        // const viewportWidth = window.innerWidth
        

        document.body.classList.add('homePageBackground')
        window.addEventListener('scroll', handleScroll)

        if (scrollY <= 220) {
            metaTag.content = "#000000"
        }
        else {
            metaTag.content = "#FFFFFF"
        }

        if (windowWidth < 1024) {
            setHideRight(true)
        }
        else {
            setHideRight(false)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            metaTag.content = "#FFFFFF"
            const element = document.querySelector('.container') as HTMLElement
            element.style.setProperty('--globalPadding', '1.6rem')
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener("resize", handleResize)
            document.body.classList.remove('homePageBackground')
        }
    },[windowWidth, hideRight, metaTag, scrollY])


    const textTabItem = [
        {isSelected: true, text: "投稿", event: undefined},
        {isSelected: false, text: "コメント", event: undefined},
    ]

    // const collects = userProfile.collect.map(item => item.itemId)

    return (
        <>
            <MyPageBG image="https://s2.loli.net/2023/10/11/XfHUdZjozQTblRs.webp"/>
            <div className="myPageContainer fadeIn">
                <div className="myPageContainer_left">
                    <div className="profileAndTab">
                        <MyPageProfile
                            setUserUpdated={setUserUpdated}
                            userId={params.id}
                            avatar={userProfile.avatar}
                            name={userProfile.name}
                            signature={userProfile.signature}
                            itemCnt={userProfile.posts.length}
                            coleCnt={userProfile.collect.length}
                            following={userProfile.follow}
                            follower={userProfile.follower}
                        />
                        <TextTabBar textTabItem={textTabItem}/>
                    </div>
                    
                    <div className="itemContainer">
                        {userProfile.posts.length > 0 ? <PostedItemBlock posts={userProfile.posts}/> : <NoItem/>}
                    </div>
                </div>
                {!hideRight ? (<div className="myPageContainer_right">
                    {userProfile.collect.length > 0 && params.id === localStorage.getItem("userId") ? <ExtraInfoCollects collects={collectsArr}/> : <></>}
                    <ExtraInfoFriends isMe={params.id === localStorage.getItem("userId")} friends={friends}/>
                </div>) : (<></>)}
            </div>
        </>
    )
}

export default MyPage