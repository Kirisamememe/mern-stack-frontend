const UserAvatar = ({imageUrl }: {imageUrl: string | null }) => {
    return (
        <div>
            <img src={imageUrl ?? undefined} alt="" srcSet="" />
        </div>
    )
}

export default UserAvatar

