

function User({ user }) {
    return (
        <span className="user">
            <div className="user">{user.name}</div>
            <div className="tweet-handle">@{user.handle}</div>
        </span>
    );
}

export default User;
