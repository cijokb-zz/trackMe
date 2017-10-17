import React, { Component } from 'react';
import './App.css';
import database from './firebaseConfig';
import HomePage from './HomePage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }
    componentDidMount() {
        const users = database.ref('users');
        users.on('value', snap => {
            console.log('data loaded');
            this.setState({isLoading: false});
            console.log(snap.val());
        });
    }
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <HomePage appState={this.state.isLoading}/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
