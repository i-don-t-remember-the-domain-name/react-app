import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import UserPageTab from './UserPageTab';

function UserPageTabs(props) {
  if (props.hacker.commentor !== props.match.params.username) {
    props.history.push('/');
    return null;
  }

  let miliseconds = props.hacker.time_cmnt_fst.seconds * 1000;
  let dateInfo = new Date(miliseconds);
  let date = `${dateInfo.getFullYear()}-${dateInfo.getMonth()}-${dateInfo.getDate()}`;
  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <SDUserTabs>
      <UserPageTab color={'#4c6cec'} heading={'First Comments'} data={date} />
      <UserPageTab color={'#f59f00'} heading={'All Comments'} data={numberWithCommas(props.hacker.cnt_cmnts_oall)} />
      <UserPageTab color={'#4c6cec'} heading={'Salty Comments'} data={numberWithCommas(props.hacker.cnt_slt_s)} />
      <UserPageTab color={'#ff5d3e'} heading={'Rank In Amount Of Salty Comments'} data={props.hacker.rank_lt_amt_slt} />
      <UserPageTab color={'#74b816'} heading={'Rank In Qunatity of Brought Saltiness'} data={props.hacker.rank_lt_qty_sc} />
      <UserPageTab color={'#FBBD05'} heading={'Average Saltiness'} data={props.hacker.avg_slt_s.toFixed(2)} />
    </SDUserTabs>
  );
}

const SDUserTabs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default withRouter(UserPageTabs);
