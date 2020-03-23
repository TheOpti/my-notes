import React, { PureComponent } from 'react';

class Application extends PureComponent {
  render() {
    console.log(this);
    return (
      <div>
        This part is visible only for logged users
      </div>
    );
  }
}

export default Application;
