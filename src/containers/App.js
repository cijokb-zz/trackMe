import React, { Component } from 'react';
import './App.css';
import database from '../firebase/firebaseConfig';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as beginAjaxCall from '../actions/ajaxCallStatusActions';
import Loaders from '../components/common/Loaders';
import HeaderBar from '../components/common/HeaderBar';
import Footer from '../components/common/Footer';

class App extends Component {
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
                <HeaderBar/>
                <Loaders currentStatus={this.props.isLoading ? 'loading' : 'hide'}/>
                <Footer/>
            </div>

        );
    }
}

//export default App;

function mapStateToProps (state, ownProps) {
    return {
        isLoading: state.isLoading
    };
}

//advanced way using bindActionCreator
function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(beginAjaxCall, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
