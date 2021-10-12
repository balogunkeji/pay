import Form from './Form/';
import Payment from './Payment/';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/payment/card" exact  component={Payment} />
        <Route path="/payment/ussd"   component={Payment} />
        <Route path="/payment/bank"   component={Payment} />
        <Route path="/payment/wallet"   component={Payment} />
      </Switch>
    </div>
  );
}

export default App;
 

