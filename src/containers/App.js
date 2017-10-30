import React, { Component } from 'react';
import './App.css';
import database from '../firebase/firebaseConfig';
import HomePage from '../components/HomePage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as beginAjaxCall from '../actions/ajaxCallStatusActions';



class App extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     isLoading: false
    //     // };
    // }
    componentDidMount() {
        const users = database.ref('users');
        users.on('value', snap => {
            console.log('data loaded');
            this.props.actions.beginAjaxCall(false);
            console.log(snap.val());
        });
    }
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <HomePage appState={this.props.isLoading}/>
                </MuiThemeProvider>
            </div>

        );
    }
}

//export default App;

function mapStateToProps (state, ownProps) {
    debugger;
    return {
        isLoading: state.isLoading
    };
}

//advanced way using bindActionCreator
function mapDispatchToProps (dispatch) {
    debugger;
    return {
        actions: bindActionCreators(beginAjaxCall, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
