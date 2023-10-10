const Background = ({ image }: {image: string}) => {
    return (
        <>
            {/* ここからは背景画像　*/}
            <div className="background_image_container">
                <div className="background_image_gradient" />
                {image && <img src={image} alt="item" />}
            </div>
        </>
    )
}

export default Background