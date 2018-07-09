import React from 'react';
import { connect } from 'react-redux';
import CamperForm from './form/CamperForm';
import camperAction from '../actions/camperaction'


const EnrollCamper = (props) => (
    <div  id="enroll">
        <CamperForm 
            onSubmit={(camperInfo) => {
                props.dispatch(camperAction(camperInfo));
            }}        
        />
    </div>
);

export default connect()(EnrollCamper);