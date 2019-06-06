import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import monthlyPlot from '../../data/HN_stats_yearly_summary';

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        const monthlyPlotWithoutAllTime = monthlyPlot.filter(m => m.period !== 'all_time');
        const monthlyPlotCommentsEdit = monthlyPlotWithoutAllTime.map(m => {
            m.hn_count_oall = m.hn_count_oall - m.hn_cnt_slt_s;
            m.hn_prc_of_slt = `${((m.hn_cnt_slt_s / m.hn_count_oall) * 100).toFixed(2)}%`;
            return m;
        });
        return (
            <ResponsiveContainer height={300} width="100%">
                <BarChart
                    data={monthlyPlotCommentsEdit}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar name="# salty comments" stackId="a" dataKey="hn_cnt_slt_s" fill="#F4A000" />
                    <Bar name="# all comments" stackId="a" dataKey="hn_count_oall" fill="#4c6cec" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
