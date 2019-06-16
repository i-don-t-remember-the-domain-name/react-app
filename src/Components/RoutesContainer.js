import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Import Components
import MainLandingPage from '../screens/MainLandingPage';
import AboutPage from '../screens/AboutPage';
import HackerProfilePage from '../screens/HackerProfilePage';
import HNStatsPage from '../screens/HNStatsPage';

//Default export
function RoutesContainer(props) {
    return (
        <Switch>
            <Route exact path="/" render={pr => <MainLandingPage {...pr} redirectToHackerProfilePage={props.redirectToHackerProfilePage} searchHacker={props.searchHacker} loading={props.loading} error={props.error} />} />
            <Route exact path="/about" render={pr => <AboutPage {...pr} />} />
            <Route exact path="/hnstats" render={pr => <HNStatsPage theme={props.theme} {...pr} />} />
            <Route
                path="/:hacker"
                render={pr => (
                    <HackerProfilePage
                        {...pr}
                        searchHacker={props.searchHacker}
                        redirectToHackerProfilePage={props.redirectToHackerProfilePage}
                        averageSaltiness={props.averageSaltiness}
                        countOfAllComments={props.countOfAllComments}
                        countOfSaltyComments={props.countOfSaltyComments}
                        hackerName={props.hackerName}
                        monthlyPlot={props.monthlyPlot}
                        rankAmountOfSaltiness={props.rankAmountOfSaltiness}
                        rankQuantityOfSaltiness={props.rankQuantityOfSaltiness}
                        rankOverallSaltiness={props.rankOverallSaltiness}
                        dateOfFirstComment={props.dateOfFirstComment}
                        saltiestComments={props.saltiestComments}
                        loading={props.loading}
                        error={props.error}
                        theme={props.theme}
                    />
                )}
            />
        </Switch>
    );
}

export default RoutesContainer;
