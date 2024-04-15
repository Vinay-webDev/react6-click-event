 
function Button() {

   const handleClick = (e) => console.log(e);

    return(
        <>
        <button onClick={(e) => handleClick(e)} > click me😃 </button>
        </>
    );
}

export default Button








