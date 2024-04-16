
function Profilepic() {
    
    const imageUrl = './src/assets/profilepic.jpg'
    
    const handleClick = (e) => e.target.style.display = "none"; 

    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl} ></img>
    );
}

export default Profilepic


/* let's add event parameter to hide the profilepic 
when we click */

