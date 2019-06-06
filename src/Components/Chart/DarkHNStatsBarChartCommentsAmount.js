import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
    average = this.props.monthlyPlot.filter(m => m.period === 'all_time');
    monthlyPlotWithoutAllTime = this.props.monthlyPlot.filter(m => m.period !== 'all_time');
    monthlyPlotCommentsEdit = this.monthlyPlotWithoutAllTime.map(m => {
        m.hn_count_oall = Number(m.hn_count_oall - m.hn_cnt_slt_s);
        m.hn_prc_of_slt = `${((m.hn_cnt_slt_s / m.hn_count_oall) * 100).toFixed(2)}%`;
        return m;
    });
    render() {
        console.log(this.monthlyPlotCommentsEdit);
        return (
            <ResponsiveContainer height={300} width="100%">
                <BarChart
                    data={this.monthlyPlotCommentsEdit}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip />
                    <Legend />
                    <Bar name="# salty comments" stackId="a" dataKey="hn_cnt_slt_s" fill="#FE5E01" />
                    <Bar name="# all comments" stackId="a" dataKey="hn_count_oall" fill="#B401B5" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
