import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <SDFooter>
      <div>
        Created by <a href="www.google.com">Ivana</a> and <a href="www.google.com">Britton</a>. All Rigts Reserved
      </div>
    </SDFooter>
  );
}

const SDFooter = styled.footer`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  font-size: 0.7rem;
  height: 70px;
  width: 100vw;
  padding-bottom: 10px;
`;

export default Footer;
