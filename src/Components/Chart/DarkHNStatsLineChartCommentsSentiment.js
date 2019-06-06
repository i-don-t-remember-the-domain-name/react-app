import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import monthlyPlot from '../../data/HN_stats_yearly_summary';

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
    chartMonthlyPlot = monthlyPlot;
    average = this.chartMonthlyPlot.filter(m => m.period === 'all_time');
    render() {
        return (
            <ResponsiveContainer height={300} width="100%">
                <LineChart
                    width={1000}
                    height={300}
                    data={this.chartMonthlyPlot}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" stroke="white" />
                    <YAxis stroke="white" label={{ value: 'sentiment', angle: -90, position: 'left', color: 'white', stroke: 'white' }} />
                    <Tooltip />
                    <Legend />
                    <Line name="annual average saltiness" type="monotone" dataKey="hn_avg_oall" stroke="#FE5E01" />
                    <ReferenceLine y={this.average[0].hn_avg_oall} stroke="#B401B5" strokeDasharray="3 3" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
