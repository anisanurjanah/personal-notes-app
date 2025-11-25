import React from 'react';
import Header from './layouts/Header.jsx';
import Main from './layouts/Main.jsx';
import { getUserLogged, putAccessToken } from './utils/network-data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  async componentDidMount() {
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  render() {
    if (this.state.initializing) {
      return null;
    }
    
    return (
      <div className="contact-app">
        <Header authedUser={this.state.authedUser} />
        <Main authedUser={this.state.authedUser} loginSuccess={this.onLoginSuccess} />
      </div>
    );
  }
}

export default App;
