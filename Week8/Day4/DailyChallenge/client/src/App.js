import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    post: '',
    response: ''
  };

  componentDidMount() {
    this.callAPI();
  }

  callAPI = async () => {
    const res = await fetch('http://localhost:5000/api/hello');
    const data = await res.json();
    this.setState({ message: data.message });
  };

  handleChange = (event) => {
    this.setState({ post: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ post: this.state.post })
    });

    const data = await response.json();
    this.setState({ response: data.message });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{this.state.message}</h1>
        <h2>Post to Server:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.post}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
