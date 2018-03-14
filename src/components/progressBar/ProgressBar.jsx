import React from 'react';
/**
* Imports from same folder sub-components
*/
import './ProgressBar.scss'
import ControlPanel from './ControlPanel.jsx';
import Bar from './Bar.jsx';

/**
 * Main Class: ProgressBar, parent component who manage
 *             state of 'percentage', main variable.
 */
export default class ProgressBar extends React.Component {
  constructor() {
    super()
    this.state = {
      percentage: 50
    }
    this.handleClick = this.handleClick.bind(this)
  }
/**
 * handleClick: setState of percentage on case
 * @param {Number|String} qty 
 */
  handleClick(qty) {
    switch (qty) {
      case 10:
        this.setState({percentage: this.state.percentage + qty}) 
        break;
      case 1:
      this.setState({percentage: this.state.percentage + qty}) 
        break;
      case -1:
      this.setState({percentage: this.state.percentage + qty}) 
        break;
      case -10:
      this.setState({percentage: this.state.percentage + qty}) 
        break;
      case 'random':
        this.setState({percentage: Math.ceil(Math.random()*100)})
      default:
        break;
    }
  }
  render() {
    const percentage = this.state.percentage;
    return (
      <div>
          <ControlPanel onClickChange={this.handleClick} />
          <Bar percentage={percentage}/>
      </div>
      )}
}