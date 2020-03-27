import React, { PureComponent } from 'react';
import { AuthContext } from '../../context/auth';

class Application extends PureComponent {
  render() {
    return (
      <div>
        <div>
          This part is visible only for logged users
        </div>
        <AuthContext.Consumer>
          {({ logout }: any) => (
            <button onClick={logout}>
              Logout from the app
            </button>
          )}
        </AuthContext.Consumer>
        
      </div>
    );
  }
}

export default Application;
