
import React from "react";
import { useLocation } from 'react-router-dom';


const Chart_result = () => {
    const location = useLocation();
    const result = location.state?.result || {};

    return (
        <div id="result-container">
            <h1>결과화면</h1>
            {result ? (
                <div>
                    <h2>세부결과</h2>
                    <p>Average Savings: {result.averageSavings}</p>
                    <p>Standard Deviation of Savings: {result.stdDevSavings}</p>
                    <p>Average Pensions: {result.averagePensions}</p>
                    <p>Standard Deviation of Pensions: {result.stdDevPensions}</p>
                    <img src={result.imageUrl} alt="Savings Distribution" />
                </div>
            ) : (
                <p>No results to display.</p>
            )}
        </div>
    );
}

export default Chart_result;