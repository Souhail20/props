import React from 'react';
import PropTypes from 'prop-types'
const myStyle = { color:"#F08080", textAlign: "center" , marginTop: "50px" ,padding: "10px"}
const Welcome = props => {
    return (
      <div className="container" style={{  backgroundImage: `url("https://i.pinimg.com/originals/cf/bf/7f/cfbf7ffd6dde7b4bd4be383b4f1eb638.jpg")`}}>  
      <h2 style={myStyle}> {props.Bio} </h2>
      <h1 style={{textAlign: 'center',marginTop:'50px'}}>{props.children}</h1>
      <button style={{width: '100%', height: '70px',display:"block",justifyContent : 'center' ,backgroundColor:"#E0FFFF"}} onClick={() => props.handleName(props.FullName)}>
        ClickMe
      </button>
      </div>
    );
   };
   Welcome.defaultProps = {
    FullName:"Random",
    Bio:"there is no bio",
  }
  Welcome.propTypes = {
   FullName: PropTypes.string, 
   };  
export default Welcome;
