import React from 'react';
import Loaders from './common/Loaders';
import HeaderBar from './common/HeaderBar';

const HomePage = ({appState}) => (
    <div>
        <HeaderBar/>
        <Loaders currentStatus={appState ? 'loading' : 'hide'}/>
    </div>
);

export default HomePage;
