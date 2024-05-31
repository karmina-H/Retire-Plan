import './result.css'
import React from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { start_age, initial_salary_before_tax, retiremonet_age, current_age } = location.state || {};
    const handleClick = async () => {
        const data = {
            start_age: start_age,
            working_years: retiremonet_age - start_age,
            initial_salary_before_tax: initial_salary_before_tax,
            current_age:current_age
        };

        try {
            const response = await axios.post('http://localhost:5001/api/calculate', data);
            navigate('/chart_result', { state: { result: response.data } });
        } catch (error) {
            console.error('Error:', error);
        }
    };

        return(
            <div id="result-container">
            <h1>Result Page</h1>
            <p>Start Age: {start_age}</p>
            <p>Initial Salary Before Tax: {initial_salary_before_tax}</p>
            <p>current_age : {current_age}</p>
            <p>retiremonet_age: {retiremonet_age}</p>
            <button onClick={handleClick}>계산하기</button>
            
        </div>
        );
}

export default Result;