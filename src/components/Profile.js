const Profile = (props) => {
    const isShowName = props.isShowName
    let myname = '';
    if (isShowName) {
        myname = props.username;
    }
    else {
        myname = ''
    }
    const age = 25;
    return (
        <div style={{ border: '1px solid black' }}>
            Enter
            <p>{age}</p>
            <img src={props.image} alt="My profile" width={props.size} height={props.size} />
            <p>{isShowName ? <p>{props.username}</p> : ''}</p>
            <p>{isShowName && props.username}</p>
            <p>{myname}</p>
        </div>
    );
}

// what are you props
// props -> properties
// && , ? : , if else statements

export const Asset = () => {
    return (
        <>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, eveniet.</p>
        </>
    )
}

export default Profile;