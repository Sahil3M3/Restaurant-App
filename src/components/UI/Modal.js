import React from 'react'
import classes from "./Modal.module.css"
import ReactDOM from "react-dom"

const Backdrop=(props)=>{
    return (
        <div className={classes.backdrop}  onClick={props.onClose}>

        </div>
    )
}

const ModalOverlays=(props)=>{

    return (<div className={classes.modal}>
            <div className={classes.content}>{props.children} </div>
        </div>
      )
}

const Modal = (props) => {
    const portalElment=document.getElementById('overlays')
  return <>
{ReactDOM.createPortal(<Backdrop  onClose={props.onClose}/>,portalElment)}
{ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,portalElment)}
  </>
}

export default Modal