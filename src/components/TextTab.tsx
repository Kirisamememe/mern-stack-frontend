import React, { MouseEventHandler } from 'react'

const TextTab = ({ isSelected, text, event }: { isSelected: boolean, text: string, event: MouseEventHandler<HTMLButtonElement> | undefined}) => {
    const className = isSelected ? "textTab_Active" : "textTab"

    return (
        <>
            <button className={className} onClick={event}>{text}</button>
        </>
    )
}

export default TextTab