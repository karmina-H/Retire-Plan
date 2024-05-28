import './result.css'
import React from "react";
import { useLocation } from 'react-router-dom';


const Result = () => {
    const location = useLocation();
    const { start_age, working_years, initial_salary_before_tax, retiremonet_age, current_age } = location.state || {};
        return(
            <div id="result-container">
            <h1>Result Page</h1>
            <p>Start Age: {start_age}</p>
            <p>Working Years: {working_years}</p>
            <p>Initial Salary Before Tax: {initial_salary_before_tax}</p>
            <p>current_age : {current_age}</p>
            <p>retiremonet_age: {retiremonet_age}</p>
        </div>
        );
}

export default Result;