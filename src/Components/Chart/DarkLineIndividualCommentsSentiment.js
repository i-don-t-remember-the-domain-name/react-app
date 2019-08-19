import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
    render() {
        return (
            <ResponsiveContainer height={300} width="100%">
                <LineChart
                    width={1000}
                    height={300}
                    data={this.props.monthlyPlot}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="key" stroke="white" />
                    <YAxis stroke="white" label={{ value: 'sentiment', angle: -90, position: 'left', color: 'white', stroke: 'white' }} />
                    <Tooltip />
                    <Legend />
                    <Line name="toxic comments" type="monotone" dataKey="t_s" stroke="#FE5E01" />
                    <Line name="non-toxic comments" type="monotone" dataKey="t_h" stroke="#1FDA02" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
