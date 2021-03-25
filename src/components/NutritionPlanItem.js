import React from 'react';
import {Link} from 'react-router-dom';

class NutritionPlanItem extends React.Component{
    render(){
        return(
            <div class="container">
            <div class="card card-body bg-light mb-3">
                <div class="row">
                    <div class="col-2">
                        <span class="mx-auto">Nutrition Plan Id</span>
                    </div>
                    <div class="col-lg-6 col-md-4 col-8">
                        <h3>Nutrition Plan Name</h3>
                        <p>Nutrition Plan description</p>
                    </div>
                    <div class="col-md-4 d-none d-lg-block">
                        <ul class="list-group">
                            <Link to={`/updateProject/`}>
                                <li class="list-group-item update">
                                    <i class="fa fa-edit pr-1">Update Plan Info</i>
                                </li>
                            </Link>
                            <Link to={`/deleteProject/`}>
                                <li class="list-group-item delete">
                                    <i class="fa fa-minus-circle pr-1">Delete Nutrition Plan</i>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default NutritionPlanItem;