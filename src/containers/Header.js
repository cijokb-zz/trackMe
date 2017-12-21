import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderBar from '../components/common/HeaderBar';
import {signOut} from '../actions/fireBaseActions';

// const Header = (props) => (
//     <HeaderBar userInfo={props.userInfo} signOut={}/>
// );


export class Header extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }
    signOut() {
        this.props.actions.signOut();
    }
    render() {
        return (
            <HeaderBar userInfo={this.props.userInfo} signOut={this.signOut} isLogged={this.props.isLogged}/>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        userInfo: state.fireBase.auth,
        isLogged: state.fireBase.auth.isLogged
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            signOut: bindActionCreators(signOut, dispatch)
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

