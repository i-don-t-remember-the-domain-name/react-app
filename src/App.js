import React, { useState } from 'react';

//Styling
import './App.scss';

//Import Components
import HackerContainer from './Components/HackerContainer';

//Default export
function App(props) {
  const [averageSaltiness, setAverageSaltiness] = useState(undefined);
  const [countOfAllComments, setCountOfAllComments] = useState(undefined);
  const [countOfSaltyComments, setCountOfSaltyComments] = useState(undefined);
  const [hackerName, setHackerName] = useState(undefined);
  const [monthlyPlot, setMonthlyPlot] = useState(undefined);
  const [rankAmountOfSaltiness, setRankAmountOfSaltiness] = useState(undefined);
  const [rankQuantityOfSaltiness, setRankQuantityOfSaltiness] = useState(undefined);
  const [rankOverallSaltiness, setRankOverallSaltiness] = useState(undefined);
  const [dateOfFirstComment, setDateOfFirstComment] = useState(undefined);
  const [saltiestComments, setSaltiestComments] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="app-container">
      <HackerContainer
        //state
        averageSaltiness={averageSaltiness}
        countOfAllComments={countOfAllComments}
        countOfSaltyComments={countOfSaltyComments}
        hackerName={hackerName}
        monthlyPlot={monthlyPlot}
        rankAmountOfSaltiness={rankAmountOfSaltiness}
        rankQuantityOfSaltiness={rankQuantityOfSaltiness}
        rankOverallSaltiness={rankOverallSaltiness}
        dateOfFirstComment={dateOfFirstComment}
        saltiestComments={saltiestComments}
        loading={loading}
        error={error}
        //setState
        setAverageSaltiness={setAverageSaltiness}
        setCountOfAllComments={setCountOfAllComments}
        setCountOfSaltyComments={setCountOfSaltyComments}
        setHackerName={setHackerName}
        setMonthlyPlot={setMonthlyPlot}
        setRankAmountOfSaltiness={setRankAmountOfSaltiness}
        setRankQuantityOfSaltiness={setRankQuantityOfSaltiness}
        setRankOverallSaltiness={setRankOverallSaltiness}
        setDateOfFirstComment={setDateOfFirstComment}
        setSaltiestComments={setSaltiestComments}
        setLoading={setLoading}
        setError={setError}
      />
    </div>
  );
}

export default App;
