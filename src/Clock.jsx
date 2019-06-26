import React from 'react';

// *** EXPORT Component ***    (Class component)
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() { // *** lifecycle methods ***
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({  //setState updates and re-renders the component!
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
      </div>
    );
  }
}

export default Clock;


/*
Do Not Modify State Directly
For example, this will not re-render a component:
Wrong:
this.state.comment = 'Hello';

Use:
this.setState({ comment: 'Hello' });

..
The only place where you can assign this.state is the constructor.

State Updates May Be Asynchronous
React may batch multiple setState() calls into a single update for performance.

Because this.props and this.state may be updated asynchronously,
you should not rely on their values for calculating the next state.
*/
