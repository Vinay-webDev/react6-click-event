
function Profilepic() {
    
    const imageUrl = './src/assets/profilepic.jpg'
    
    const handleClick = () => console.log("ouch!")

    return(
        <img onClick={handleClick} src={imageUrl} ></img>
    );
}

export default Profilepic


/* let's add event parameter to hide the profilepic 
when we click */

