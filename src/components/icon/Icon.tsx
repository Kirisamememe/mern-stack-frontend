

export const LikeIcon36 = ({ isLiked, animate }:{ isLiked: boolean, animate: boolean }) => {
    const likeClass = isLiked ? "buttonBoxLiked" : "buttonBox"

    return (
        <div className={`${likeClass} ${animate ? 'like36Animation1' : ''}`}>
            {isLiked ? (
                // いいねしている状態のSVG
                <div className={`animeContainer ${animate ? 'like36Animation2' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.3711 13.8316V28.531L26.033 28.531C27.3416 28.531 27.9959 28.531 28.5101 28.2834C28.9628 28.0653 29.3393 27.7158 29.5905 27.2806C29.8757 26.7863 29.9245 26.1338 30.0219 24.8288V24.8288L30.6792 16.0244C30.7906 14.5312 30.8464 13.7847 30.5901 13.2093C30.3649 12.7038 29.9783 12.2872 29.4909 12.025C28.9362 11.7266 28.1876 11.7266 26.6903 11.7266L20.8618 11.7266V7.06171C20.8618 5.64692 19.7149 4.5 18.3001 4.5C17.2992 4.5 16.39 5.08288 15.9722 5.99236L12.3711 13.8316ZM10.3682 28.531V14.3759L7.4 14.3758C6.55992 14.3758 6.13988 14.3758 5.81902 14.5393C5.53677 14.6831 5.3073 14.9126 5.16349 15.1949C5 15.5157 5 15.9358 5 16.7758V26.131C5 26.9711 5 27.3911 5.16349 27.712C5.3073 27.9943 5.53677 28.2237 5.81901 28.3675C6.13988 28.531 6.55992 28.531 7.4 28.531L10.3682 28.531Z" fill="white"/>
                    </svg>
                </div>
            ) : (
                // いいねしていない状態のSVG
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.1993 6.50649C18.157 6.50166 18.0928 6.50003 17.7962 6.50003C17.5935 6.50003 17.5517 6.50089 17.5196 6.50362C17.18 6.53247 16.8785 6.7323 16.7196 7.03383C16.7046 7.06233 16.6875 7.10043 16.6085 7.28715L13.0911 15.6011V26.9719H25.8759C26.4146 26.9719 26.7606 26.9712 27.0249 26.9503C27.2769 26.9304 27.3728 26.8967 27.4218 26.8731C27.6028 26.786 27.7533 26.6464 27.8539 26.4726C27.8811 26.4255 27.9221 26.3324 27.961 26.0826C28.0019 25.8207 28.0288 25.4758 28.0696 24.9386L28.7413 16.1C28.788 15.485 28.8175 15.0857 28.8151 14.7809C28.8127 14.4871 28.7789 14.3786 28.7561 14.3273C28.6661 14.1248 28.5115 13.9579 28.3164 13.8529C28.2669 13.8262 28.1613 13.7843 27.8685 13.7597C27.5648 13.7342 27.1644 13.7333 26.5476 13.7333L20.0858 13.7333C19.5335 13.7333 19.0858 13.2856 19.0858 12.7333V7.78963C19.0858 7.49308 19.0842 7.42885 19.0793 7.38655C19.0265 6.92414 18.6617 6.5593 18.1993 6.50649ZM11.0911 26.9719V16.3982H7.6C7.30348 16.3982 7.14122 16.399 7.02464 16.4085C7.02 16.4089 7.0156 16.4093 7.01145 16.4097C7.01107 16.4138 7.01069 16.4182 7.01031 16.4229C7.00078 16.5394 7.00001 16.7017 7.00001 16.9982V26.3719C7.00001 26.6685 7.00078 26.8307 7.01031 26.9473C7.01069 26.952 7.01107 26.9563 7.01145 26.9605C7.0156 26.9609 7.02 26.9613 7.02464 26.9616C7.14122 26.9712 7.30348 26.9719 7.60001 26.9719H11.0911ZM11.4284 14.3982L14.7666 6.50787C14.7708 6.4979 14.775 6.48803 14.7791 6.47824C14.8385 6.33767 14.8904 6.21507 14.9502 6.10144C15.4269 5.19685 16.3315 4.59735 17.3503 4.5108C17.4783 4.49992 17.6114 4.49997 17.764 4.50002C17.7746 4.50003 17.7854 4.50003 17.7962 4.50003C17.8126 4.50003 17.8288 4.50002 17.8448 4.50001C18.0652 4.49991 18.2548 4.49983 18.4262 4.51941C19.8135 4.67785 20.908 5.77237 21.0664 7.15959C21.086 7.33105 21.0859 7.5206 21.0858 7.74105C21.0858 7.75708 21.0858 7.77327 21.0858 7.78963V11.7333L26.5879 11.7333C27.1532 11.7333 27.6386 11.7333 28.0361 11.7667C28.4539 11.8019 28.8702 11.8795 29.2647 12.092C29.8499 12.4071 30.3139 12.9077 30.5838 13.5151C30.7657 13.9246 30.8116 14.3455 30.815 14.7648C30.8182 15.1638 30.7814 15.6478 30.7386 16.2115L30.0611 25.127C30.0239 25.617 29.9916 26.0415 29.9371 26.3908C29.8794 26.761 29.7863 27.1261 29.5852 27.4738C29.2836 27.9954 28.8319 28.414 28.289 28.6753C27.927 28.8494 27.556 28.9146 27.1824 28.9441C26.8299 28.972 26.4042 28.972 25.9128 28.9719L7.56809 28.9719C7.31571 28.972 7.06993 28.972 6.86178 28.955C6.63318 28.9363 6.36345 28.8923 6.09202 28.754C5.7157 28.5622 5.40974 28.2563 5.21799 27.8799C5.07969 27.6085 5.03563 27.3388 5.01695 27.1102C4.99994 26.902 4.99997 26.6562 5 26.4038L5 16.9663C4.99997 16.7139 4.99994 16.4682 5.01695 16.26C5.03563 16.0314 5.07969 15.7617 5.21799 15.4902C5.40974 15.1139 5.7157 14.808 6.09202 14.6162C6.36345 14.4779 6.63318 14.4339 6.86178 14.4152C7.06993 14.3982 7.31571 14.3982 7.56809 14.3982L11.4284 14.3982Z" fill="#2A2933"/>
                </svg>
            )}
        </div>
    );
};

export const CollectIcon36 = ({ isCollected, animate }:{ isCollected: boolean, animate: boolean }) => {
    const collectClass = isCollected ? "buttonBoxCollected" : "buttonBox"

    return(
        <div className={`${collectClass} ${animate ? 'collect36Animation1' : ''}`}>
            {isCollected ? (
                // コレクトしている状態のSVG
                <div className={`animeContainer ${animate ? 'collect36Animation2' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <g filter="url(#filter0_d_427_2041)">
                            <path d="M18 6L21.8206 13.7414L30.3637 14.9828L24.1819 21.0086L25.6412 29.5172L18 25.5L10.3588 29.5172L11.8181 21.0086L5.63627 14.9828L14.1794 13.7414L18 6Z" fill="white"/>
                            <path d="M18 6L21.8206 13.7414L30.3637 14.9828L24.1819 21.0086L25.6412 29.5172L18 25.5L10.3588 29.5172L11.8181 21.0086L5.63627 14.9828L14.1794 13.7414L18 6Z" stroke="white" strokeWidth="2" strokeMiterlimit="16" strokeLinejoin="round"/>
                        </g>
                        <defs>
                            <filter id="filter0_d_427_2041" x="0.63623" y="2" width="34.7275" height="33.5172" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.425 0 0 0 0 0.255 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_427_2041"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_427_2041" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </div>
            ) : (
                // コレクトしていない状態のSVG
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18 5C18.3806 5 18.7283 5.2161 18.8967 5.55743L22.4847 12.8274L30.5075 13.9932C30.8842 14.0479 31.1972 14.3117 31.3148 14.6738C31.4324 15.0358 31.3343 15.4332 31.0617 15.6989L25.2563 21.3577L26.6268 29.3482C26.6912 29.7233 26.5369 30.1025 26.229 30.3262C25.921 30.55 25.5128 30.5795 25.1759 30.4024L18 26.6298L10.8241 30.4024C10.4872 30.5795 10.0789 30.55 9.771 30.3262C9.46305 30.1025 9.30883 29.7233 9.37318 29.3482L10.7436 21.3577L4.93825 15.6989C4.66568 15.4332 4.56758 15.0358 4.6852 14.6738C4.80283 14.3117 5.11578 14.0479 5.49246 13.9932L13.5153 12.8274L17.1033 5.55743C17.2717 5.2161 17.6194 5 18 5ZM18 8.25955L15.0761 14.184C14.9305 14.4791 14.6489 14.6837 14.3232 14.731L7.78522 15.681L12.5161 20.2925C12.7518 20.5223 12.8594 20.8533 12.8037 21.1777L11.6869 27.6892L17.5347 24.6149C17.826 24.4617 18.174 24.4617 18.4653 24.6149L24.3131 27.6892L23.1963 21.1777C23.1406 20.8533 23.2482 20.5223 23.4839 20.2925L28.2148 15.681L21.6768 14.731C21.3511 14.6837 21.0695 14.4791 20.9239 14.184L18 8.25955Z" fill="#0D0A26" fillOpacity="0.8"/>
                </svg>
            )}
        </div>
    )
}


export const LikeIcon20 = ({ isCmtLiked, animate }:{ isCmtLiked: boolean, animate: boolean }) => {
    return (
        <>
            {isCmtLiked ? (
                <div className={`animeContainer ${animate ? 'like20Animation' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.47119 7.49665V17.7537H5.22803V7.85777L3.6758 7.85776C3.00478 7.85776 2.66928 7.85776 2.41298 7.99828C2.18754 8.12188 2.00425 8.3191 1.88938 8.56168C1.75879 8.83745 1.75879 9.19846 1.75879 9.92048V15.691C1.75879 16.413 1.75879 16.774 1.88938 17.0498C2.00425 17.2924 2.18754 17.4896 2.41298 17.6132C2.66927 17.7537 3.00478 17.7537 3.67577 17.7537H3.6758L6.33034 17.7537L13.9938 17.7537H13.9938C15.2175 17.7537 15.8294 17.7537 16.315 17.5072C16.7426 17.2901 17.101 16.9418 17.3451 16.5059C17.6221 16.0112 17.6841 15.3562 17.8081 14.0461L18.1027 10.932V10.932C18.2517 9.35802 18.3261 8.57101 18.0869 7.96255C17.8768 7.42809 17.5052 6.98553 17.0324 6.70645C16.494 6.38873 15.7588 6.38873 14.2884 6.38873L11.9684 6.38874V2.71823C11.9684 1.76605 11.229 1.08187 10.3156 0.994149C9.40224 0.906423 8.85073 1.40639 8.59884 2.04171L6.47119 7.49665Z" fill="#5741E7"/>
                    </svg>
                </div>
                
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0011 2.4978C9.74972 2.4978 9.48258 2.66098 9.35706 2.97757L7.12425 8.60919V16.25H13.6346C14.204 16.25 14.5849 16.2494 14.8799 16.2246C15.1641 16.2007 15.3068 16.1581 15.4075 16.1069C15.6584 15.9796 15.8775 15.7706 16.0301 15.4981C16.0967 15.3791 16.155 15.2123 16.2078 14.8988C16.2619 14.5776 16.3017 14.1622 16.3591 13.5553L16.6273 10.7212C16.6962 9.993 16.7432 9.49031 16.7493 9.09946C16.7553 8.71517 16.7189 8.50972 16.6616 8.3639C16.5286 8.02551 16.298 7.75709 16.0187 7.59225C15.9096 7.52787 15.7451 7.47165 15.4012 7.44024C15.0474 7.40794 14.5858 7.40721 13.9027 7.40721L11.4593 7.40721C11.0451 7.40721 10.7093 7.07142 10.7093 6.65721V3.31682C10.7093 2.8118 10.3414 2.4978 10.0011 2.4978ZM5.62425 16.25V9.21593H4.2446C3.92596 9.21593 3.7355 9.21661 3.59413 9.22904C3.49981 9.23733 3.46373 9.24856 3.4552 9.25185C3.39523 9.28493 3.33659 9.34325 3.29669 9.42752C3.29331 9.43465 3.27435 9.47595 3.2627 9.62933C3.25051 9.78998 3.25 10.0031 3.25 10.3431V15.1228C3.25 15.4629 3.25051 15.676 3.2627 15.8366C3.27435 15.99 3.29331 16.0313 3.29669 16.0384C3.33659 16.1227 3.39523 16.181 3.4552 16.2141C3.46372 16.2174 3.4998 16.2286 3.59413 16.2369C3.7355 16.2493 3.92596 16.25 4.2446 16.25H5.62425ZM5.86481 7.71593L7.96266 2.42472C8.29561 1.58495 9.08409 0.997803 10.0011 0.997803C11.2714 0.997803 12.2093 2.08875 12.2093 3.31682V5.90721L13.9374 5.90721C14.577 5.90719 15.1075 5.90718 15.5376 5.94646C15.9852 5.98733 16.4002 6.07569 16.7811 6.30045C17.3625 6.64356 17.8082 7.18065 18.0576 7.81505C18.218 8.22297 18.2565 8.65251 18.2492 9.12288C18.242 9.57993 18.1889 10.1417 18.1236 10.8318L17.8499 13.7241C17.7957 14.2968 17.7512 14.7667 17.6869 15.1481C17.6204 15.5432 17.5243 15.8996 17.3388 16.2309C17.0473 16.7516 16.614 17.1767 16.0865 17.4445C15.7454 17.6176 15.3887 17.6871 15.0055 17.7193C14.6403 17.75 14.196 17.75 13.6654 17.75H4.21636C3.93532 17.75 3.67785 17.75 3.46276 17.7311C3.22997 17.7107 2.97944 17.6639 2.7348 17.5298C2.38468 17.3378 2.11002 17.0373 1.941 16.6804C1.82554 16.4365 1.78507 16.1881 1.76701 15.9502C1.74998 15.7258 1.74999 15.4551 1.75 15.1487V10.3172C1.74999 10.0109 1.74998 9.74009 1.76701 9.51576C1.78507 9.27785 1.82554 9.02939 1.941 8.78556C2.11002 8.42864 2.38468 8.12812 2.7348 7.93616C2.97944 7.80204 3.22997 7.75527 3.46276 7.7348C3.67784 7.71589 3.9353 7.71591 4.21632 7.71593L5.86481 7.71593Z" fill="#1E1A40" fillOpacity="0.35"/>
                </svg>
            )}
        </>
    )
}

export const CommentIcon36 = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M18 7C11.9249 7 7 11.9249 7 18C7 20.805 8.04859 23.3627 9.77668 25.3061C10.1285 25.7019 10.1109 26.3033 9.73648 26.6777L8.43848 27.9757C7.99611 28.4181 7.71316 28.7024 7.53067 28.9204C7.51638 28.9374 7.50347 28.9533 7.49181 28.9679C7.51038 28.9699 7.53069 28.972 7.55286 28.974C7.83603 28.999 8.23714 29 8.86274 29L18 29C24.0751 29 29 24.0751 29 18C29 11.9249 24.0751 7 18 7ZM5 18C5 10.8203 10.8203 5 18 5C25.1797 5 31 10.8203 31 18C31 25.1797 25.1797 31 18 31L8.86274 31H8.81716C8.25037 31 7.75887 31 7.37632 30.9661C7.01644 30.9343 6.51239 30.8599 6.11532 30.5208C5.6285 30.105 5.37015 29.4813 5.42038 28.8431C5.46135 28.3225 5.76522 27.9135 5.99714 27.6365C6.24368 27.342 6.59123 26.9945 6.99202 26.5938L7.02426 26.5615L7.67968 25.9061C5.99946 23.7158 5 20.9736 5 18ZM12 16C12 15.4477 12.4477 15 13 15H23C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17H13C12.4477 17 12 16.5523 12 16ZM13 20C12.4477 20 12 20.4477 12 21C12 21.5523 12.4477 22 13 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H13Z" fill="#2A2933"/>
            </svg>
        </>
    )
}

export const CommentIcon20 = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.5003 3.48206C6.97456 3.48206 4.11635 6.34026 4.11635 9.86603C4.11635 11.5459 4.76422 13.0728 5.82511 14.2132C6.10007 14.5088 6.09177 14.9689 5.80632 15.2544L4.81068 16.25H10.4971L10.5005 16.25C14.0262 16.2499 16.8843 13.3917 16.8843 9.86603C16.8843 6.34026 14.0261 3.48206 10.5003 3.48206ZM10.5041 17.75C14.8566 17.7479 18.3843 14.219 18.3843 9.86603C18.3843 5.51183 14.8545 1.98206 10.5003 1.98206C6.14613 1.98206 2.61635 5.51183 2.61635 9.86603C2.61635 11.6789 3.22901 13.35 4.25763 14.6817L2.46969 16.4697C2.25519 16.6842 2.19103 17.0068 2.30711 17.287C2.4232 17.5673 2.69668 17.75 3.00002 17.75H10.5005L10.5041 17.75ZM7.25018 8.75C7.25018 8.33579 7.58597 8 8.00018 8H13.0002C13.4144 8 13.7502 8.33579 13.7502 8.75C13.7502 9.16421 13.4144 9.5 13.0002 9.5H8.00018C7.58597 9.5 7.25018 9.16421 7.25018 8.75ZM8.00019 11C7.58598 11 7.25019 11.3358 7.25019 11.75C7.25019 12.1642 7.58598 12.5 8.00019 12.5H10.5002C10.9144 12.5 11.2502 12.1642 11.2502 11.75C11.2502 11.3358 10.9144 11 10.5002 11H8.00019Z" fill="#191340" fillOpacity="0.35"/>
            </svg>
        </>
    )
}

export const DeleteIcon20 = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6.74798 17.5H13.2591C14.3502 17.5 15.0516 16.8194 15.1083 15.6923L15.583 6.18631H16.3623C16.7237 6.18631 17 5.89356 17 5.52762C17 5.16169 16.7166 4.88357 16.3623 4.88357H13.2166V3.78577C13.2166 2.65868 12.5223 2 11.3391 2H8.64676C7.46356 2 6.76923 2.65868 6.76923 3.78577V4.88357H3.63765C3.2834 4.88357 3 5.169 3 5.52762C3 5.90088 3.2834 6.18631 3.63765 6.18631H4.417L4.8917 15.6923C4.94838 16.8267 5.64271 17.5 6.74798 17.5ZM8.09413 3.85164C8.09413 3.47838 8.34919 3.23686 8.73887 3.23686H11.247C11.6366 3.23686 11.8917 3.47838 11.8917 3.85164V4.88357H8.09413V3.85164ZM6.88968 16.1899C6.5 16.1899 6.2166 15.8899 6.19534 15.4581L5.72065 6.18631H14.2581L13.7976 15.4581C13.7834 15.8972 13.5071 16.1899 13.1032 16.1899H6.88968ZM7.90992 15.0116C8.21457 15.0116 8.40587 14.814 8.39879 14.5213L8.18623 7.89889C8.17915 7.60614 7.98077 7.41585 7.69028 7.41585C7.39271 7.41585 7.20142 7.61346 7.2085 7.90621L7.42105 14.5286C7.42814 14.8213 7.62652 15.0116 7.90992 15.0116ZM10 15.0116C10.2976 15.0116 10.503 14.8213 10.503 14.5286V7.90621C10.503 7.61346 10.2976 7.41585 10 7.41585C9.70243 7.41585 9.50405 7.61346 9.50405 7.90621V14.5286C9.50405 14.8213 9.70243 15.0116 10 15.0116ZM12.0901 15.019C12.3735 15.019 12.5719 14.8213 12.5789 14.5286L12.7915 7.90621C12.7986 7.61346 12.6073 7.42317 12.3097 7.42317C12.0192 7.42317 11.8208 7.61346 11.8138 7.90621L11.6012 14.5286C11.5941 14.814 11.7854 15.019 12.0901 15.019Z" fill="black" fillOpacity="0.35"/>
            </svg>
        </>
    )
}


export const ShareIcon36 = () => {
    return(
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M23.7576 6.99963C23.2053 6.99963 22.7576 7.44735 22.7576 7.99963C22.7576 8.55192 23.2053 8.99963 23.7576 8.99963L25.586 8.99963L17.7929 16.7927C17.4024 17.1832 17.4024 17.8164 17.7929 18.2069C18.1834 18.5974 18.8166 18.5974 19.2071 18.2069L27.0002 10.4138V12.2423C27.0002 12.7946 27.4479 13.2423 28.0002 13.2423C28.5525 13.2423 29.0002 12.7946 29.0002 12.2423V7.99963C29.0002 7.73442 28.8949 7.48006 28.7073 7.29253C28.5198 7.10499 28.2654 6.99963 28.0002 6.99963H23.7576ZM7.83733 13.7905C7.00477 15.8005 6.78693 18.0122 7.21137 20.146C7.6358 22.2798 8.68345 24.2398 10.2218 25.7782C11.7602 27.3165 13.7202 28.3642 15.854 28.7886C17.9878 29.2131 20.1995 28.9952 22.2095 28.1627C24.2195 27.3301 25.9375 25.9202 27.1462 24.1113C28.3549 22.3023 29 20.1756 29 18C29 17.4477 28.5523 17 28 17C27.4477 17 27 17.4477 27 18C27 19.78 26.4722 21.5201 25.4832 23.0001C24.4943 24.4802 23.0887 25.6337 21.4442 26.3149C19.7996 26.9961 17.99 27.1743 16.2442 26.8271C14.4984 26.4798 12.8947 25.6226 11.636 24.3639C10.3774 23.1053 9.5202 21.5016 9.17294 19.7558C8.82567 18.01 9.0039 16.2004 9.68509 14.5558C10.3663 12.9113 11.5198 11.5057 12.9999 10.5168C14.4799 9.52783 16.22 8.99999 18 8.99999C18.5523 8.99999 19 8.55227 19 7.99999C19 7.4477 18.5523 6.99999 18 6.99999C15.8244 6.99999 13.6977 7.64512 11.8887 8.85382C10.0798 10.0625 8.66989 11.7805 7.83733 13.7905Z" fill="#2A2933"/>
            </svg>
        </>
    )
}

export const ImgIcon48 = () =>　{
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.3229 7L14.4 7H33.6L33.6771 7C34.7314 6.99997 35.6409 6.99993 36.3901 7.06114C37.1807 7.12574 37.9672 7.26838 38.7239 7.65396C39.8529 8.2292 40.7708 9.14709 41.346 10.2761C41.7316 11.0328 41.8743 11.8193 41.9389 12.6099C42.0001 13.3591 42 14.2686 42 15.3229V15.4V32.6V32.6771C42 33.7314 42.0001 34.6409 41.9389 35.3901C41.8743 36.1807 41.7316 36.9672 41.346 37.7239C40.7708 38.8529 39.8529 39.7708 38.7239 40.346C37.9672 40.7316 37.1807 40.8743 36.3901 40.9389C35.6409 41.0001 34.7314 41 33.6771 41H33.6H14.4H14.3229C13.2686 41 12.3591 41.0001 11.6099 40.9389C10.8193 40.8743 10.0328 40.7316 9.27606 40.346C8.14709 39.7708 7.2292 38.8529 6.65396 37.7239C6.26838 36.9672 6.12574 36.1807 6.06114 35.3901C5.99993 34.6409 5.99997 33.7314 6 32.6771L6 32.6V15.4L6 15.3229L6 15.3229C5.99997 14.2686 5.99994 13.3591 6.06114 12.6099C6.12574 11.8193 6.26838 11.0328 6.65396 10.2761C7.2292 9.14709 8.14709 8.2292 9.27606 7.65396C10.0328 7.26838 10.8193 7.12574 11.6099 7.06114C12.3591 6.99994 13.2686 6.99997 14.3229 7L14.3229 7ZM11.9357 11.0479C11.3923 11.0922 11.1909 11.1676 11.092 11.218C10.7157 11.4097 10.4097 11.7157 10.218 12.092C10.1676 12.1909 10.0922 12.3923 10.0479 12.9357C10.0016 13.5023 10 14.2469 10 15.4V30.9907L16.5062 23.6713C16.8857 23.2443 17.4297 23 18.001 23C18.5723 23 19.1163 23.2443 19.4958 23.6713L24.2232 28.9896L32.5062 19.6713C32.8857 19.2443 33.4297 19 34.001 19C34.5723 19 35.1163 19.2443 35.4958 19.6713L38 22.4885V15.4C38 14.2469 37.9984 13.5023 37.9521 12.9357C37.9078 12.3923 37.8324 12.1909 37.782 12.092C37.5903 11.7157 37.2843 11.4097 36.908 11.218C36.8091 11.1676 36.6077 11.0922 36.0643 11.0479C35.4977 11.0016 34.7531 11 33.6 11H14.4C13.2469 11 12.5023 11.0016 11.9357 11.0479ZM38 28.5093L34.001 24.0104L26.9045 31.994L31.3542 37H33.6C34.7531 37 35.4977 36.9984 36.0643 36.9521C36.6077 36.9078 36.8091 36.8324 36.908 36.782C37.2843 36.5903 37.5903 36.2843 37.782 35.908C37.8324 35.8091 37.9078 35.6077 37.9521 35.0643C37.9984 34.4977 38 33.7531 38 32.6V28.5093ZM25.9918 37L18.001 28.0104L10.557 36.3849C10.711 36.5453 10.8915 36.6798 11.092 36.782C11.1909 36.8324 11.3923 36.9078 11.9357 36.9521C12.5023 36.9984 13.2469 37 14.4 37H25.9918ZM17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" fill="#A3A1B3"/>
        </svg>
        </>
    )
}

export const ImgUploadIcon = () => {
    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M21.0822 22.0548V24.0892H25.8529C29.0469 24.0892 31 22.1972 31 19.6135C31 17.457 29.7692 15.7175 27.7449 14.9139C27.7551 10.3161 24.439 7 20.1768 7C17.471 7 15.4366 8.39358 14.1651 10.2347C11.734 9.63459 8.86541 11.4757 8.76369 14.3443C6.43427 14.741 5 16.6737 5 19.1354C5 21.8717 7.08529 24.0892 10.4726 24.0892H14.8772V22.0548H10.4726C8.25509 22.0548 7.05477 20.7324 7.05477 19.0947C7.05477 17.1925 8.30595 15.8599 10.3811 15.8599C10.5336 15.8599 10.5947 15.7786 10.5845 15.6361C10.5235 12.6049 12.6901 11.6283 14.8772 12.2692C15.0094 12.2997 15.0908 12.2793 15.1518 12.1674C16.1283 10.3873 17.644 9.02426 20.1667 9.02426C23.3607 9.02426 25.6393 11.5571 25.7919 14.5172C25.8224 15.0563 25.7817 15.6565 25.741 16.1448C25.7207 16.2872 25.7817 16.3685 25.9139 16.3889C27.7754 16.7449 28.9452 17.8232 28.9452 19.5219C28.9452 21.007 27.9077 22.0548 25.8122 22.0548H21.0822ZM17.9797 29.1753C18.5086 29.1753 18.9358 28.748 18.9358 28.2394V18.8709L18.8341 17.0602L19.4851 17.813L20.8991 19.2371C21.072 19.4202 21.3059 19.5219 21.5399 19.5219C22.0078 19.5219 22.3944 19.1761 22.3944 18.698C22.3944 18.4538 22.3028 18.2606 22.1197 18.0978L18.7019 14.8834C18.4476 14.6495 18.234 14.5579 17.9797 14.5579C17.7355 14.5579 17.5117 14.6495 17.2574 14.8834L13.8396 18.0978C13.6565 18.2606 13.5751 18.4538 13.5751 18.698C13.5751 19.1761 13.9515 19.5219 14.4194 19.5219C14.6534 19.5219 14.8873 19.4202 15.0602 19.2371L16.4742 17.813L17.1354 17.0602L17.0235 18.8709V28.2394C17.0235 28.748 17.4609 29.1753 17.9797 29.1753Z" fill="#0D0A26" fillOpacity="0.8"/>
        </svg>
        </>
    )
}