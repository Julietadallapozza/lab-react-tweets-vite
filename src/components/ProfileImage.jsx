function ProfileImage(props) {
    return (
        <div className="tweet-userimage"> <img src={props.src} alt={props.alt} /></div>
    )
}

export default ProfileImage;
