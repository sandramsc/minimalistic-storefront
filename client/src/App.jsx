import Main from "./pages/Main";
import React, { Component } from 'react';
import Loader from './components/store/NavItems/Loader';

class App extends Component {
  state = { loading: true, error: true };


  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 3000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false,
      error: false
    });
    
  };

  componentDidMount() {
    this.wait(5000);
  }
    render() {
      if (this.state.loading) return <Loader />;
      if (this.state.error) return <div>err</div>;
      return <>
      <Main/>
      </>;
    }
  }
  
  export default App;