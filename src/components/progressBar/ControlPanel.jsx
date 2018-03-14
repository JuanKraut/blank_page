import React, { Component } from 'react';

class ControlPanel extends Component {
 /**
  * Lift-ups in hierarchy the event that modifies percentage
  * @param {Number|String} qty 
  */
  handleChange(qty) {
    event.preventDefault();
    this.props.onClickChange(qty)
  }

  render() {
    return (
      <div className="control-percentage">
        <a className="add" onClick={() => this.handleChange(10)}>
          <i className="fas fa-angle-double-up"></i>
        </a>
        <a className="add" onClick={() => this.handleChange(1)}>
            <i className="fas fa-arrow-alt-circle-up"></i> 
        </a>
        <a className="substract" onClick={() => this.handleChange(-1)}>
          <i className="fas fa-arrow-alt-circle-down"></i>
        </a>
        <a className="substract" onClick={() => this.handleChange(-10)}>
          <i className="fas fa-angle-double-down"></i>
        </a>
        <a onClick={() => this.handleChange('random')}>
          <i className="fas fa-asterisk"></i>
        </a>
      </div>
    );
  }
}

export default ControlPanel;