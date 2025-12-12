import PropTypes from 'prop-types';

function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.userName}</h2>

    const loginPrompt = <h2 className="login-prompt">Please log in to continue!</h2>

    return (props.isLoggedIn ? welcomeMessage : loginPrompt)

    /*
    if(props.isLoggedIn){
        return <h2 className="welcome-message">Welcome {props.userName}</h2>
    }
    else{
        return <h2 className="login-prompt">Please log in to continue!</h2>
    }
    */

    // return(props.isLoggedIn  ?  <h2>Welcome{props.userName}</h2> : 
    //                             <h2>Please log in to continue!</h2>);
}

UserGreeting.prototypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: False,
    userName: "Guest",
}

export default UserGreeting