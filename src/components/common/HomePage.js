/**
 * Created by cijo.kb on 27/04/17.
 */
import React from 'react';
import {Link} from 'react-router';

const HomePage = () => (
    <div className="jumbotron">
        <h1>Administration</h1>
        <p>Responsvive web apps</p>
        <Link to="login" className =" btn btn-primary btn-lg">Learn More </Link>
    </div>);

export default HomePage;
