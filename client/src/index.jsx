import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  componentWillMount() {
    this.time = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }



  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));