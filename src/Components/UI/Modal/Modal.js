import React, { Fragment } from 'react';
import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = props => {
    return (
        props.modalOpen ? 
        (<Fragment>
            <Backdrop closeModal = { props.modalClose } > </Backdrop>
            <div className = "modal">
            <button className="modalCloseButton" onClick={props.modalClose}><FontAwesomeIcon className="imageIcon" icon="times"/></button>
                {props.children}
            </div>
        </Fragment>) : null
    )
}

export default Modal