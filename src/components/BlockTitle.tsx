const BlockTitle = ({ text }: { text: string }) => {
    return (
        <div className="blockTitle">
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
                <path d="M0 0H4V16H0V0Z" fill="#6A55F3"/>
            </svg>
            <h2 className="title16_G1">{text}</h2>
        </div>
    )
}

export default BlockTitle