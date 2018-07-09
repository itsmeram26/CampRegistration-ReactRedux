import React from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from "react-data-grid";
import ReactDOM from 'react-dom';
import xhr from '../utils/xhr';
import { populate } from '../actions/camperaction'

class CamperDashboard extends React.Component {
    constructor(props, context) {
      super(props, context);
      this._columns = [
        {
          key: 'cfname',
          name: 'First Name',
          resizable: true
        },
        {
          key: 'clname',
          name: 'Last Name',
          resizable: true
        },
        {
          key: 'address',
          name: 'Address',
          resizable: true
        },
        {
          key: 'city',
          name: 'City',
          resizable: true
        },
        {
          key: 'state',
          name: 'State',
          resizable: true
        },
        {
          key: 'zipcode',
          name: 'Zipcode',
          resizable: true
        },
        {
          key: 'email',
          name: 'e-Mail',
          resizable: true
        },
        {
          key: 'phone',
          name: 'Phone',
          resizable: true
        }
      ];
    }

    componentDidMount(){
      this.props.dispatch(populate());
    }

  rowGetter = (i) => {
      return this.props.campersList[i];
    };
  
    render() {
      return  (
        <div className='container-fluid'>
          <ReactDataGrid
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this.props.campersList.length}
          minHeight={500}
          minColumnWidth={120} 
        />
        </div>
);
    }
}

CamperDashboard.defaultProps = {
  campersList : []
}

const mapStateToProps = (state) => {
  return {
    campersList : state.camper.campersList
  };
};

export default connect(mapStateToProps)(CamperDashboard);