import React from 'react';
import Header from './layouts/Header.jsx';
import Main from './layouts/Main.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
import { getUserLogged, putAccessToken } from './utils/network-data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          return { theme: newTheme };
        });
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
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
    document.documentElement.setAttribute('data-theme', this.state.theme);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    return (
      <ThemeProvider value={this.state}>
        <div className="contact-app">
          <Header authedUser={this.state.authedUser} logout={this.onLogout} name={this.state.authedUser?.name} />
          <Main authedUser={this.state.authedUser} loginSuccess={this.onLoginSuccess} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
