import React from "react";
import { useState } from "react";




const Getsalary = (props) => {

    const [errorMessage, setErrorMessage] = useState("");

    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (validatePositiveNumber(value)) {
            props.setinitial_salary_before_tax(value);
            setErrorMessage("");
            props.setIsValidInput(true);
        } else {
            setErrorMessage("올바른 숫자를 입력하세요");
            props.setIsValidInput(false);
        }
    };

    const ages = Array.from({ length: 980 }, (_, i) => 2000 + (100 * i));

    return (
        <div>
            연봉을 입력하세요
            <select onChange={handleSelectChange}>
                <option value="">연봉 선택</option>
                {ages.map(age => (
                    <option key={age} value={age}>{age}만원</option>
                ))}
            </select>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
    
};

const validatePositiveNumber = (value) => {
    const number = parseFloat(value);
    return !isNaN(number) && number > 0;
};
export default Getsalary;