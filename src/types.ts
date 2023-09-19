

export type ReadAllType = {
    allItems: ItemType[]
}

export type E =  React.ChangeEvent<HTMLInputElement>

export type SubCommentType = {
    date: string
    userId: string
    userName: string
    userAvatar: string | null
    commentId: string
    subCommentId: string
    commentText: string | null
    like: string[]
    likeCnt: number
    likeState: boolean
    isLast: boolean
}

export type CommentType = {
    date: string
    userId: string
    userName: string
    userAvatar: string | null
    commentId: string
    commentText: string | null
    like: string[]
    likeCnt: number
    subComments: SubCommentType[]
    likeState: boolean
}

export type ItemType = {
    _id: string
    title: string
    date: string
    image: string
    mainBody: string
    email: string
    name: string
    collect: number
    comments: CommentType[] | null
    like: string[]
}

export type ParamsType = {
    id: string
}

export type ContentsType = {
    singleItem: ItemType
    FormatDate: (date: Date) => string
    paragraphs: JSX.Element[]
}

export type ButtonBarType = {
    likeCnt: number
    commentCnt: number
    collectCnt: number
    //ログインしていない場合、userIdはundefinedになる
    userId: string | undefined
    authToken?: string | undefined
    params: ParamsType
    liked: boolean
    isCollected: boolean
    setIsCollected: React.Dispatch<React.SetStateAction<boolean>>
}

export type FloatButtonType = {
    params: ParamsType
    setShowPopup: (value: boolean) => void
}

export type ConfirmPopupType = {
    message: {
        title: string
        body: string
    }
    onConfirm: (value: boolean) => void
    onCancel: (value: boolean) => void
    yesText: string
    noText: string
}

export type FloatLabelType = {
    className: string
    placeholder: string
    name: string
    type: string
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onBlurFunc?: (event: React.FocusEvent<HTMLInputElement>) => void
    required?: boolean
}

export type AuthContextType = {
    loginUser: LoginUserType | null
    setLoginUser: React.Dispatch<React.SetStateAction<LoginUserType | null>>;
}

export type ImgInputType = {
    className: string
    text: React.ReactElement
    setImage: (url: string) => void
    onFileChange: (url: string | null ) => void
    // onPreviewGeneratedType: (base64Data: string) => void
}


export type DropdownMenuType = {
    isOpen: boolean
    menuItems: MenuItem[]
}

type MenuItem = {
    className?: string
    label: string
    link: string
}

export type LoginUserType = {
    email: string
    avatar: string | null
    userId: string
}


export type LikeControllerType = {
    isLiked: boolean
    setLikes: React.Dispatch<React.SetStateAction<number>>
    setIsLiked: React.Dispatch<React.SetStateAction<boolean>>
    params: { id: string }
    userId: string
}

export type LikeCmtControllerType = {
    isCmtLiked: boolean
    setCmtLikes: React.Dispatch<React.SetStateAction<number>>
    setIsCmtLiked: React.Dispatch<React.SetStateAction<boolean>>
    userId: string
    commentId: string
}

export type LikeSbCmtControllerType = {
    isSbCmtLiked: boolean
    setSbCmtLikes: React.Dispatch<React.SetStateAction<number>>
    setIsSbCmtLiked: React.Dispatch<React.SetStateAction<boolean>>
    userId: string
    commentId: string
    subCommentId: string
}

export type CollectControllerType = {
    isCollected: boolean
    setCollects: React.Dispatch<React.SetStateAction<number>>
    setIsCollected: React.Dispatch<React.SetStateAction<boolean>>
    params: { id: string }
    userId: string
}

export type InputSubCommentType = {
    userAvatar: string | null
    userName: string | null
    sendText: string
    setSendText: (sendText: string) => void
    handleCommentSubmit: (commentText: string) => void
    isTextAreaVisible: boolean
    // setTextAreaVisible: (newValue: boolean) => void
    toggleTextArea: (e?: React.MouseEvent) => void;
    // isCommentButtonClicked: boolean
    // setIsCommentButtonClicked: (newValue: boolean) => void 
}

export type InputCommentType = {
    sendText: string
    setSendText: (sendText: string) => void
    handleCommentSubmit: (commentText: string) => void

}

export type HandleDeleteCommentType = {
    params: ParamsType
    commentId: string
    commentUpdated: boolean
    setCommentUpdated: React.Dispatch<React.SetStateAction<boolean>>
}

export type HandleDeleteSubCommentType = {
    commentId: string
    subCommentId:string
    commentUpdated: boolean
    setCommentUpdated: React.Dispatch<React.SetStateAction<boolean>>
}