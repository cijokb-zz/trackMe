import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import HeaderBar from '../components/common/HeaderBar';

const Header = (props) => (
    <HeaderBar/>
);
function mapStateToProps(state, props) {
    return {
        userInfo: state.fireBase.auth
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);

