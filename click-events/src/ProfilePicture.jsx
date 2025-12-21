
function ProfilePicture(){

    const imageUrl = './src/assets/profile.jpg';

    const handleClick = (e) => console.log("OUCH!");
 
    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}

export default ProfilePicture