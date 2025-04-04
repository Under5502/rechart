import logo from "./logo.svg";
import "./App.css";
import Chart from "./Chart/Chart";
import SolChart from "./SolChart/SolChart";
import FlowChart from "./FLowChart/FLowChart";

function App() {
  return (
    <div className="App">
      <Chart />
      <SolChart />
      <FlowChart />
    </div>
  );
}

export default App;
