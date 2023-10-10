const UserAvatar = ({imageUrl }: {imageUrl: string | null }) => {
    return (
        <>
            <img src={imageUrl ?? undefined} alt="" srcSet="" />
        </>
    )
}

export default UserAvatar