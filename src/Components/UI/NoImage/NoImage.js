import React, { Fragment } from 'react';
import './NoImage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NoPoster = () => {
    return (
        <Fragment>
            <div className="noPoster">
            <FontAwesomeIcon class="image"/>
            </div>
        </Fragment>
    )
    }

export default NoPoster;