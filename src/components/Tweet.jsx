import User from "./User"
import ProfileImage from "./ProfileImage"
import Timestamp from "./Timestamp"
import Message from "./Message"




function Tweet(props) {
  const { user, message, timestamp } = props.tweet; //object 
  console.log(user)

  return (
    <div className="tweet">
      <User user={props.tweet.user} />
      <ProfileImage src={user.image} alt={user.name} />
      <div className="tweet-handle">@{user.handle}</div>
      <Message message={props.tweet.message} />
      <Timestamp time={props.tweet.timestamp} />
    </div>
  );
}




export default Tweet;

