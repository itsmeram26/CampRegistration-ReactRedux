import React from 'react';
import { connect } from 'react-redux';
import CamperForm from './form/CamperForm';
import camperAction from '../actions/camperaction'


const CamperInformation = (props) => (
    <div>
        <CamperForm 
            onSubmit={(camperInfo) => {
                props.dispatch(camperAction(camperInfo));
            }}        
        />
    </div>
);

export default connect()(CamperInformation);