import React from 'react';

class Test extends React.Component {

    render(props) {
        {console.log(this);}
      return <h1>Hello {this.props.name}</h1>;
    }
  }
export default Test;