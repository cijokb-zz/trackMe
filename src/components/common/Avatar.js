import React from 'react';
import defaultAvatar from '../../images/user.svg';
import PropTypes from 'prop-types';

const Avatar = ({photoURL, displayName, email}) =>
    //const {photoURL, displayName, email} = props;
    (<div className="User_Info">
        <div className="User_image_container">
            <img src={photoURL} className="User_image" alt="UserImage"
                onError={(event) => {
                    event.target.src = defaultAvatar;
                }}/>
        </div>
        <div className="">
            {displayName}
        </div>
        <div className="">
            {email}
        </div>
    </div>)
;

Avatar.defaultProps = {
    photoURL: defaultAvatar,
    displayName: 'User Name',
    email: 'user@email.com'
};

Avatar.propTypes = {
    photoURL: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default Avatar;
