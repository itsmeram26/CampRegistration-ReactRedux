import React from 'react';

export default class CamperForm extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            cname:(props.camper.cname || ''),
            gender:(props.camper.gender || ''),
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
            <div className="container-fluid">
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <label>
                        Camper's Name
                        <input
                        name="cname"
                        value={this.state.cname}
                        type="textbox"
                        onChange={this.handleInputEvent}
                        />
                    </label>
                    <label>
                        Male
                        <input
                            name="gender"
                            value="Male"
                            type="radio"
                            onChange={this.handleInputEvent}
                            />
                    </label>
                    <label>
                        Female
                        <input
                        name="gender"
                        value="Female"
                        type="radio"
                        onChange={this.handleInputEvent}
                        />
                    </label>
                    <label>
                        Address
                        <input
                        name="address"
                        value={this.state.address}
                        type="text"
                        onChange={this.handleInputEvent}
                        />
                    </label>
                    <label>
                        City
                        <input
                            name="city"
                            value={this.state.city}
                            type="text"
                            onChange={this.handleInputEvent}
                            />
                    </label>
                    <br />
                    <label>
                        State
                        <input
                            name="state"
                            value={this.state.state}
                            type="text"
                            onChange={this.handleInputEvent}
                            />
                    </label>
                    <label>
                        ZipCode
                        <input
                        name="zipcode"
                        value={this.state.zipcode}
                        type="number"
                        onChange={this.handleInputEvent}
                        />
                    </label>   
                    <label>
                        E-Mail
                        <input
                        name="email"
                        value={this.state.email}
                        type="email"
                        onChange={this.handleInputEvent}
                        />
                    </label>   
                    <label>
                        Phone Number
                        <input
                        name="phone"
                        value={this.state.phone}
                        type="number"
                        onChange={this.handleInputEvent}
                        />
                    </label>                                         
                    <label>
                        <button>Next</button>
                     </label>     
                </form>
                </div>
            </div>
        )        
    }
}

CamperForm.defaultProps = {
    camper : ''
}