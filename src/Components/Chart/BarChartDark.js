import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <ResponsiveContainer height={300} width="100%">
        <BarChart
          data={this.props.monthlyPlot}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" stroke="white" />
          <YAxis stroke="white" label={{ value: 'comments count', angle: -90, position: 'left', stroke: 'white' }} />
          <Tooltip />
          <Legend />
          <Bar name="# sweet comments" dataKey="c_h" fill="#1FDA02" />
          <Bar name="# salty comments" dataKey="c_s" fill="#FE5E01" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
