const Background = ({ image }: {image: string}) => {
    return (
        <div>
            {/* ここからは背景画像　*/}
            <div className="background-image-container">
                <div className="background-image-gradient"></div>
                {image && <img src={image} alt="item" />}
            </div>
        </div>
    )
}

export default Background