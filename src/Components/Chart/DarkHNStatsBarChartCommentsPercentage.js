import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import monthlyPlot from '../../data/HN_stats_yearly_summary';

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
    chartMonthlyPlot = monthlyPlot;
    average = this.chartMonthlyPlot.filter(m => m.period === 'all_time');
    monthlyPlotWithoutAllTime = this.chartMonthlyPlot.filter(m => m.period !== 'all_time');
    monthlyPlotCommentsEdit = this.monthlyPlotWithoutAllTime.map(m => {
        m.hn_count_oall = Number(m.hn_count_oall - m.hn_cnt_slt_s);
        m.hn_prc_of_slt = ((m.hn_cnt_slt_s / m.hn_count_oall) * 100).toFixed(2);
        return m;
    });
    render() {
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
                    <Bar name="% of salty comments" dataKey="hn_prc_of_slt" fill="#FE5E01" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
