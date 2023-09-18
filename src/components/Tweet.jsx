import User from "./User"
import ProfileImage from "./ProfileImage"
import Timestamp from "./Timestamp"




function Tweet(props) {
  const { user, message, timestamp } = props.tweet;
  console.log(user)

  return (
    <div className="tweet">
      {/* <div className="tweet-username">{user.name}</div> */}
      <User name={user.name} handle={user.handle} />      
      <ProfileImage src={user.image} alt={user.name} />
      {/* <div className="tweet-handle">@{user.handle}</div> */}
      <div className="tweet-message">{message}</div>
      <div className="tweet-timestamp">{timestamp}</div>
    </div>
  );
}




export default Tweet;

