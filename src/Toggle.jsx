import React, {Component} from 'react';


class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
       isToggleOn: !state.isToggleOn
     }));
  }

  render() {
    const isToggleOn = this.state.isToggleOn;

    return(
      <div>
        <button onClick={ this.handleClick }>
          { isToggleOn ? 'ON' : 'OFF' }
        </button>

        <Humma boll={ isToggleOn }/>
      </div>
    );
  }
}

function Humma(props) {
  if (props.boll === true)
    return <h4>HUMMA</h4>;
  else
    return <h4>MUMMA</h4>;
}

export default Toggle;
