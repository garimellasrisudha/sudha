import React from "react";

class HeaderComponent extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div class="container">
            <a class="navbar-brand" href="Dashboard.html">
                HealthiFy App - Nutrition Module
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse" id="mobile-nav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
    }
}
export default HeaderComponent;