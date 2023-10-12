const apiUrl = process.env.REACT_APP_API_URL || process.env.REACT_APP_API_URL_LOCAL
const imgURL = process.env.IMG_URL || ""

//readAllItem
export const fetchBase = async () => {
    return fetch(`${apiUrl}/`)
}

//readSingleItem
export const fetchItem = async (id: string, fields?: string[]) => {
    let url = `${apiUrl}/item/${id}`

    if (fields && fields.length > 0) {
        const fieldsParam = fields.join(',')
        url = `${url}?fields=${fieldsParam}`
    }
    console.log(url)

    return fetch(url)
}

//readUser
export const fetchUser = async (userId: string | null, fields?: string[]) => {
    let url = userId ? `${apiUrl}/user/readUser/${userId}` : null

    if (url && fields && fields.length > 0) {
        const fieldsParam = fields.join(',')
        url = `${url}?fields=${fieldsParam}`
    }
    console.log(url)

    return url ? fetch(url) : Promise.resolve(null)
}

//Create
export const fetchCreate = async ({title, image, mainBody}:{title: string, image: string, mainBody: string}) => {
    return fetch(`${apiUrl}/item/create`, {
        method: "POST",
        headers: { 
            "Accept": "application/json", 
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            title: title,
            image: image,
            mainBody: mainBody,
            userId: localStorage.getItem("userId")
        })
    })
}

//Update
export const fetchUpdate = async ({title, image, mainBody, userId, email, itemId}:{title: string, image: string, mainBody: string, userId: string, email: string, itemId: string}) => {
    return fetch(`${apiUrl}/item/update/${itemId}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            title: title,
            image: image,
            mainBody: mainBody,
            userId: userId,
            email: email
        })
    })
}

//Delete
export const fetchDelete = async (itemId: string) => {
    return fetch(`${apiUrl}/item/delete/${itemId}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
            //authorizationはバックエンドのauthというミドルウェアで使う
        },
    })
}

//Post Comment
export const fetchPostComment = async ({itemId, sendText}:{itemId: string, sendText: string}) => {
    return fetch(`${apiUrl}/item/${itemId}/comment`, {
        method: "POST",
        headers: { 
            "Accept": "application/json", 
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            userId: localStorage.getItem("userId"),
            commentText: sendText,
        })
    })
}


//Post SubComment
export const fetchPostSubComment = async ({commentId, sendText}:{commentId: string, sendText: string}) => {
    return fetch(`${apiUrl}/comment/${commentId}`, {
        method: "POST",
        headers: { 
            "Accept": "application/json", 
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            userId: localStorage.getItem("userId"),
            commentId: commentId,
            commentText: sendText,
        })
    })
}


//Delete Comment
export const fetchDeleteComment = async ({itemId, commentId}: {itemId: string, commentId: string}) => {
    return fetch(`${apiUrl}/item/${itemId}/comment/${commentId}/delete`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
            //authorizationはバックエンドのauthというミドルウェアで使う
        },
    })
}

//Delete SubComment
export const fetchDeleteSubComment = async ({subCommentId, commentId}: {subCommentId: string, commentId: string}) => {
    return fetch(`${apiUrl}/comment/${commentId}/${subCommentId}/delete`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("token")}`
            //authorizationはバックエンドのauthというミドルウェアで使う
        },
    })
}


//Like
export const fetchLike = async ({itemId, action, userId}:{itemId: string, action: string, userId: string}) => {
    return fetch(`${apiUrl}/item/${itemId}/${action}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
    })

}

//Like Comment
export const fetchLikeComment = async ({commentId, action, userId}:{commentId: string, action: string, userId: string}) => {
    return fetch(`${apiUrl}/comment/${commentId}/${action}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
    })
}


//Like SubComment
export const fetchLikeSubComment = async ({commentId, subCommentId, action, userId}:{commentId: string, subCommentId:string, action: string, userId: string}) => {
    return fetch(`${apiUrl}/comment/${commentId}/${subCommentId}/${action}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
    })

}


//Collect
export const fetchCollect = async ({itemId, action, userId}:{itemId: string, action: string, userId: string}) => {
    return fetch(`${apiUrl}/item/${itemId}/${action}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
    })

}


//login
export const postUserLogin = async (userInfo: {email: string, password: string}) => {
    return fetch(`${apiUrl}/user/login`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
    })
}

//register
export const postRegister = async (newUser: {email: string, password: string, name: string, code: string}) => {
    return fetch(`${apiUrl}/user/register`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
}

//Follow
export const follow = async ({yourId, myId, action}: {yourId: string, myId: string, action: string}) => {
    return fetch(`${apiUrl}/user/${yourId}/${action}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ myId })
    })
}


//Upload Image
export const uploadImage = async (data: FormData) =>{
    return fetch(imgURL, {method: "POST", body: data})
}