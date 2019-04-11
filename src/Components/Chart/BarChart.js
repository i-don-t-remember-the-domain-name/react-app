import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  commentsArray = Object.keys(this.props.hacker.monthly_plot).map(key => {
    return { ...this.props.hacker.monthly_plot[key], key };
  });
  render() {
    return (
      <BarChart
        width={1000}
        height={300}
        data={this.commentsArray}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="key" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="sweet comments count" dataKey="c_h" fill="#74B816" />
        <Bar name="salty comments count" dataKey="c_s" fill="#F4A000" />
      </BarChart>
    );
  }
}
