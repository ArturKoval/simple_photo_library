import React from 'react';

const Modal = ({picture, close}) => {
  return (
    <div 
      style={{"width": "100%", "height": "100%", "position": "absolute", "top": "0", "background": "white"}}
      onClick={close}
    >
      <h1>{picture.title}</h1>
      <img src={picture.url} alt={picture.name}/>
    </div>
  )
}

export default Modal;