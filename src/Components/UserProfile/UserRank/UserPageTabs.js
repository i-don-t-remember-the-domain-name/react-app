import React from 'react';
import styled from 'styled-components';

import UserPageTab from './UserPageTab';

export default function UserPageTabs(props) {
  let date = new Date(props.commentor_data.time_cmnt_fst * 1000).toISOString().substring(0, 10);

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <SDUserTabs>
      <UserPageTab color={'#4c6cec'} heading={'First Comments'} data={date} />
      <UserPageTab color={'#f59f00'} heading={'All Comments'} data={numberWithCommas(props.commentor_data.cnt_cmnts_oall)} />
      <UserPageTab color={'#4c6cec'} heading={'Salty Comments'} data={numberWithCommas(props.commentor_data.cnt_slt_s)} />
      <UserPageTab color={'#ff5d3e'} heading={'Rank In Amount Of Salty Comments'} data={props.commentor_data.rank_lt_amt_slt} />
      <UserPageTab color={'#74b816'} heading={'Rank In Qunatity of Brought Saltiness'} data={props.commentor_data.rank_lt_qty_sc} />
      <UserPageTab color={'#FBBD05'} heading={'Average Saltiness'} data={props.commentor_data.avg_slt_s.toFixed(2)} />
    </SDUserTabs>
  );
}

const SDUserTabs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
