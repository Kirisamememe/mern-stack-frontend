const FormatDate = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
  
    return `${year}-${month}-${day} ${hours}:${minutes}`
}

const FormatDatePro = (date: Date, format: string = "") => {
    const currentTime = new Date()

    const diffInMilliseconds = currentTime.getTime() - date.getTime()
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60))
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60))

    if (diffInMinutes === 0) {
        return `現在`
    }
    else if (diffInMinutes < 60) {
        return `${diffInMinutes} 分前`
    }
    else if (diffInHours < 24) {
        return `${diffInHours} 時間前`
    }
    else if (diffInDays < 3) {
        return `${diffInDays} 日前`
    }
    else if(format === "MDHM") {
        const offsetHours = currentTime.getTimezoneOffset() / 60 * -1

        date.setHours(date.getHours() + offsetHours)
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')

        return `${month}-${day} ${hours}:${minutes}`
    }
    else {
        const offsetHours = currentTime.getTimezoneOffset() / 60 * -1

        date.setHours(date.getHours() + offsetHours)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')

        return `${year}-${month}-${day}`
    }
}

export {FormatDate, FormatDatePro}