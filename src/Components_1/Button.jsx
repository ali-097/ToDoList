import React from "react"
import ReactDOM  from 'react-dom';

const Button = ({showText}) => {
    return ReactDOM.createPortal(
        <>
            <button onClick={showText}>Show Text</button>
        </>
    , document.getElementById("model-root"))
}

export default Button;