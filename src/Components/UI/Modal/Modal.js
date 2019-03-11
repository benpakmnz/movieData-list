import React, { Fragment } from 'react'
import './Modal.scss'
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => {
    return (
        props.modalOpen ? 
        (<Fragment>
            <Backdrop closeModal = { props.modalClose } > </Backdrop>
            <div className = "modal">
                {props.children}
            </div>
        </Fragment>) : null
    )
}

export default Modal