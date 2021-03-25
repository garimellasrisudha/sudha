import React from 'react';
import { Link } from 'react-router-dom';
import NutritionPlanItem from './NutritionPlanItem';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="conatainer">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Nutrition Plans</h1>
                        <br />
                        <Link to="/AddNutritionPlan" class="btn btn-lg btn-primary">
                            Add Nutrition Plan
                        </Link>
                        <br/>

                        <hr/>
                        <NutritionPlanItem/>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;