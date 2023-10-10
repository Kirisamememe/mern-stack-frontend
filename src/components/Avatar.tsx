const Avatar = ({imageUrl, size }: {imageUrl: string | null, size?: number }) => {
    return (
        <div style={{width: `${size}rem`}} className="userAvatar">
            <img src={imageUrl ?? undefined} alt="" srcSet="" />
        </div>
    )
}

export default Avatar