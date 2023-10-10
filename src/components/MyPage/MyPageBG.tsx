const MyPageBG = ({ image }: {image: string}) => {
    return (
        <>
            <div className="myPageBG">
                {image && <img src={image} alt="item" />}
            </div>
        </>
    )
}

export default MyPageBG