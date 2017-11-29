import React from 'react';
const AppInitError = ({error}) => (
    !error.success
        ? <div>
            <div>!Oops Something went wrong</div>
            <div>App initialization failed</div>
            <div>
                <div>
              <span>Error Code: {error.errorCode}</span>
                </div>
              <div>
            <span>Error Description :{error.errorDetails}</span>
              </div>
            </div>
        </div> : null
);

export default AppInitError;
