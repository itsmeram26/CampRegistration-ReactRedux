import React from 'react';
import { connect } from 'react-redux';
import CamperForm from './form/CamperForm';
import camperAction from '../actions/camperaction'

const CamperInformation = (props) => (
    <div>
        <CamperForm 
            onSubmit={(camperInfo) => {
                console.log(camperInfo);
                props.dispatch(camperAction(camperInfo));
                props.history.push('/');
            }}        
        />
    </div>
);

export default CamperInformation;