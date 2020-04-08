import React, { PureComponent } from 'react';
import { AuthContext } from 'context/auth';
import Navbar from 'containers/Navbar';

class Application extends PureComponent {
  render() {
    return (
      <div>
        <Navbar /> 
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
