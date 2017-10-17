// import React from 'react';
// import PropTypes from 'prop-types';
//
// const Loaders = ({show}) => (
//     <div className="loader" hidden={!show}>
//         <svg viewBox="0 0 32 32" width="32" height="32">
//             <circle id="spinner" cx="16" cy="16" r="14" fill="none"/>
//         </svg>
//     </div>
// );
//
// // Specifies the default values for props:
// Loaders.defaultProps = {
//     show: false
// };
//
// Loaders.propTypes = {
//     show: PropTypes.bool
// };
//
// export default Loaders;

import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import PropTypes from 'prop-types';

const style = {
    container: {

        left: '50%',
        top: '50%',
        position: 'fixed'
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    }
};

const Loaders = ({currentStatus}) => (
    <div style={style.container}>
        <RefreshIndicator
            size={40}
            left={10}
            top={0}
            status={currentStatus}
            style={style.refresh}
        />
    </div>
);

// Specifies the default values for props:
Loaders.defaultProps = {
    currentStatus: 'loading'
};

Loaders.propTypes = {
    currentStatus: PropTypes.string
};

export default Loaders;
