import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppMenuCmp from '../components/common/AppMenu';
import {menuItemClick} from '../actions/userActions';

const AppMenu = (props) => (

    props.isLogged ? <AppMenuCmp {...props}/> : null
);

function mapStateToProps({auth}, ownProps) {
    return {
        isLogged: auth.isLogged
    };
}

function mapDispatchToProps(dispatch) {
    return {
        menuItemClick: bindActionCreators(menuItemClick, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
