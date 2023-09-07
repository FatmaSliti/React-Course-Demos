import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState(null)

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInput) { //the initial state userInput is set to null / so access if it's not null

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} /> {/* lifting state UP */}
      {!userInput && <p style={{textAlign: 'center'}}>no investement calculated yet!</p>}
      {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput['current-savings']} />}
    </div>
  );
}

export default App;
