import React from 'react';
import {connect} from 'react-redux';
import FooterCmp from '../components/common/Footer';

const Footer = ({isLogged}) => <FooterCmp isLogged={isLogged}/>;

function mapStateToProps({auth}, ownProps) {
    return {
        isLogged: auth.isLogged
    };
}

export default connect(mapStateToProps)(Footer);
