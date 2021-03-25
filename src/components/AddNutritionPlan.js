import React from 'react';

class AddNutritionPlan extends React.Component{
    render(){
        return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Nutrition Plan form</h5>
                            <hr />
                            <form >
                                <div className="form-group">
                                    <label>Nutrition Plan Id:</label>
                                    <input type="text" 
                                        className="form-control form-control-lg "
                                        placeholder=" Enter Nutrition Plan Id"
                                        />
                                </div>
                                <div className="form-group">
                                <label>Nutrition Plan Name:</label>
                                    <input type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Enter Nutrition Plan Name"
                                        />
                                </div>

                                <div className="form-group">
                                <label>Plan Description:</label>
                                    <input type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Enter Nutrition Plan Description"
                                        />
                                </div>
                                <div className="form-group">
                                <label>Nutrition Plan Price:</label>
                                    <input type="number"
                                        className="form-control form-control-lg "
                                        placeholder="Enter Nutrition Plan Price"
                                        />
                                </div>
                                <div className="form-group">
                                <label>Created On:</label>
                                    <input type="date"
                                        className="form-control form-control-lg "
                                        placeholder="Created On"
                                        />
                                </div>
                                <div className="form-group">
                                <label>Updated On:</label>
                                    <input type="date"
                                        className="form-control form-control-lg "
                                        placeholder="Updated On"
                                        />
                                </div>
                                
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
           

        );
    }
}
export default AddNutritionPlan;