import React from 'react';
import { connect } from 'react-redux';
import ReactDataGrid from "react-data-grid";
import ReactDOM from 'react-dom';
import xhr from '../utils/xhr';

class CamperDashboard extends React.Component {
    constructor(props, context) {
      super(props, context);
      this._columns = [
        {
          key: 'cname',
          name: 'Name',
          resizable: true
        },
        {
          key: 'gender',
          name: 'Gender',
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
      this.state = {
        campers : props.camper || []
      }
    }

    componentDidMount(){
        xhr.get('campers').then((response)=> { 
            console.log('RESP :: ',response.data);
            this.setState(() => ({
              campers : response.data.camper 
            }));
        });
    }

    rowGetter = (i) => {
      return this.state.campers[i];
    };
  
    render() {
      return  (
        <div className='container-fluid'>
          <ReactDataGrid
          columns={this._columns}
          rowGetter={this.rowGetter}
          rowsCount={this.state.campers.length}
          minHeight={500}
          minColumnWidth={120} 
        />
        </div>
);
    }
}

export default CamperDashboard;