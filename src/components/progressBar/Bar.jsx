import React, { Component } from 'react';
/**
 * Class Bar, represent the ui width variable element
 */
class Bar extends Component {
  render() {
    let percentage = this.props.percentage;
    if(percentage >= 100) {
      percentage = 100; 
    }
    if (percentage <= 0) {
      percentage = 0;
    }
    return (
      <div  className="progress-box">
        <div className="percentage">
          {percentage} %
        </div>
        {/* style props depends on percentage */}
        <div className="background-percentage" 
             style={{ width: percentage + '%', 
                      backgroundColor: percentage > 50 ? '#33ff33' : '#ff471a' }}>
        </div>
      </div>
    );
  }
}

export default Bar;