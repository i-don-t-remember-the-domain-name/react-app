import React from 'react';
import { Tab } from 'semantic-ui-react';
import styled from 'styled-components';

const panes = [
  { menuItem: 'Top 100 Salt Contributed', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Top 100 Overall Saltiest', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Top 100 Saltiest Trolls', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Top 100 Salty Comments', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> }
];

const TabsList = () => (
  <SDTabsEnvContainer>
    <SDTabsContainer>
      <Tab className="tab-container" menu={{ pointing: true }} panes={panes} />
    </SDTabsContainer>
  </SDTabsEnvContainer>
);

const SDTabsEnvContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SDTabsContainer = styled.div`
  width: 50%;
  .tab-container {
    width: 100%;
  }
  .ui.menu .item {
    width: 25%;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .ui.menu .active.item {
    background-color: blue;
  }
`;

export default TabsList;
