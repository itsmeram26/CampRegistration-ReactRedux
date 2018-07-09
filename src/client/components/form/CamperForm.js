import React from 'react';

export default class CamperForm extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            cfname:(props.camper.cfname || ''),
            clname:(props.camper.clname || ''),
            address:(props.camper.address || ''),
            city:(props.camper.city || ''),
            state:(props.camper.state || ''),
            zipcode:(props.camper.zipcode || ''),
            email:(props.camper.email || ''),
            phone:(props.camper.phone || ''),
            error:''  
        }
    }
    handleInputEvent = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState(() => ({
            [name]:value
        }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div>
            <div className="container">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="cfname">First Name</label>
                            <input name="cfname" type="text" value={this.state.cfname} className="form-control" id="cfname" onChange={this.handleInputEvent} />
                        </div>     
                        <div className="form-group col-md-6">
                            <label htmlFor="clname">Last Name</label>
                            <input name="clname" type="text" value={this.state.clname} className="form-control" id="clname" onChange={this.handleInputEvent} />
                        </div>  
                    </div>
                    <div className="form-row">    
                        <div className="form-group col-md-6">
                            <label htmlFor="email">e-Mail</label>
                            <input name="email" type="text" value={this.state.email} className="form-control" id="email" onChange={this.handleInputEvent} />
                        </div>     
                        <div className="form-group col-md-6">
                            <label htmlFor="phone">Phone</label>
                            <input name="phone" type="text" value={this.state.phone} className="form-control" id="phone" onChange={this.handleInputEvent} />
                        </div>   
                    </div>           
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input name="address" type="text" value={this.state.address} className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={this.handleInputEvent} />
                    </div>      
                    <div className="form-row">    
                        <div className="form-group col-md-4">
                            <label htmlFor="city">City</label>
                            <input name="city" type="text" value={this.state.city} className="form-control" id="city" onChange={this.handleInputEvent} />
                        </div>     
                        <div className="form-group col-md-4">
                            <label htmlFor="state">State</label>
                            <input name="state" type="text" value={this.state.state} className="form-control" id="state" onChange={this.handleInputEvent} />
                        </div> 
                        <div className="form-group col-md-4">
                            <label htmlFor="zipcode">Zip Code</label>
                            <input name="zipcode" type="text" value={this.state.zipcode} className="form-control" id="zipcode" onChange={this.handleInputEvent} />
                        </div>                            
                    </div>                        
                    <button className="btn btn-primary btn-lg btn-block">Next</button>
                </form>
                </div>
            </div>
        )        
    }
}

CamperForm.defaultProps = {
    camper : ''
}