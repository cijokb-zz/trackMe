import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
class AddDeviceTeamPage extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateCheck = this.updateCheck.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        this.resetValues = this.resetValues.bind(this);
        this.state = {
            device: {
                model: '',
                tag: '',
                charger: false,
                cable: false,
                os: 'android',
                category: 'phone'
            }
        };
    }
    updateCheck(event) {
        const field = event.target.id;
        const device = this.state.device;
        device[field] = !device[field];
        this.setState({device});
    }
    handleOnChange(event) {
        const field = event.target.id;
        const device = this.state.device;
        device[field] = event.target.value;
        this.setState({device});
    }
    onSubmit() {
        this.props.createDevice(this.state.device);
    }
    handleChange = (type)=> (event, index, value)=> {
        //const field = event.target.id; // id is not avaialable
        const device = this.state.device;
        device[type] = value;
        this.setState({device});
    };
    resetValues() {
        const device = {
            model: '',
            tag: '',
            charger: false,
            cable: false,
            os: 'android',
            category: 'phone'
        };
        this.setState({device});
    }
    componentWillReceiveProps(newProps) {
      if (newProps.addDevice.success) {
        this.resetValues();
      }
    }
    render() {
        const styles = {
            block: {

            },
            checkbox: {
                marginBottom: 16,
                maxWidth: 150,
                margin: 10
            },
        };
        return (<div className="AddDevice">
            <h3>Add Device</h3>
            <form ref ="devEntForm" id="" onSubmit={this.onSubmit} >
                <TextField
                    hintText="Iphone6"
                    floatingLabelText="Device Model"
                    fullWidth={true}
                    id="model"
                    onChange={this.handleOnChange}
                    value={this.state.device.model}
                /><br/>
                <TextField
                    hintText="AC1234"
                    floatingLabelText="Device Tag"
                    fullWidth={true}
                    id="tag"
                    onChange={this.handleOnChange}
                    value={this.state.device.tag}
                /><br/>
                <SelectField
                    floatingLabelText="OS"
                    value={this.state.device.os}
                    onChange={this.handleChange("os")}
                    fullWidth={true}
                    style={{'textAlign': 'left'}}
                    id="os"
                >
                    <MenuItem value="android" primaryText="Android" />
                    <MenuItem value="ios" primaryText="Ios" />
                    <MenuItem value="windows" primaryText="Windows" />
                </SelectField>
                <SelectField
                    floatingLabelText="Category"
                    value={this.state.device.category}
                    onChange={this.handleChange("category")}
                    fullWidth={true}
                    style={{'textAlign': 'left'}}
                    id="category"
                >
                    <MenuItem value="phone" primaryText="Phone" />
                    <MenuItem value="tablet" primaryText="Tablet" />
                    <MenuItem value="windowsSurface" primaryText="Windows Surface" />
                    <MenuItem value="pda" primaryText="PDA" />
                </SelectField>
                <br />
                <Checkbox
                    label="Charger"
                    checked={this.state.device.charger}
                    onCheck={this.updateCheck}
                    style={styles.checkbox}
                    id="charger"
                />
                <Checkbox
                    label="Cable"
                    checked={this.state.device.cable}
                    onCheck={this.updateCheck}
                    style={styles.checkbox}
                    id="cable"
                />
                <RaisedButton label="Submit" primary={true} style={{'margin': '12px'}} onClick={this.onSubmit}/>
                <RaisedButton label="Cancel" type="reset" onClick={this.resetValues} />
            </form>
        </div>
        );
    }
}

export default AddDeviceTeamPage;
