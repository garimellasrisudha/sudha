
import './App.css';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import AddNutritionPlan from './components/AddNutritionPlan';


function App() {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Route  path="/dashboard" component={Dashboard} />
        <Route  path="/addNutritionPlan" component={AddNutritionPlan} />
      </div>
    </Router>


  );
}

export default App;
