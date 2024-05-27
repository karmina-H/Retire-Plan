import './result.css'
import React from "react";


const Result = (props) => {
        return(
            <div id="result-container">
                임시 페이지 -  result 
                {props[0]}
                {props.working_years}
                {props.initial_salary_before_tax}
                {props.startneeded_amount_age}
            </div>
        );
}

export default Result;