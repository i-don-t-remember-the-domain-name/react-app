import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <ResponsiveContainer height={300} width="115%">
        <BarChart
          data={this.props.monthlyPlot}
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
      </ResponsiveContainer>
    );
  }
}
