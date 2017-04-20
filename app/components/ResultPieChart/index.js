/**
*
* ResultPieChart
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['green', 'red'];

// const RADIAN = Math.PI / 180;

class ResultPieChart extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PieChart width={300} float={'left'} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={this.props.resultsData}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
        >
          {this.props.resultsData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
        </Pie>
      </PieChart>
    );
  }
}

ResultPieChart.propTypes = {
  resultsData: PropTypes.array,
};

export default ResultPieChart;
