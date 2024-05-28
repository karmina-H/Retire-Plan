import React from "react";
import { useState } from "react";

const Getage = (props) => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (validatePositiveNumber(value)) {
            props.setStart_age(value);
            setErrorMessage("");
            props.setIsValidInput(true);
            props.sethear_start_age(value);
        } else {
            setErrorMessage("올바른 숫자를 입력하세요");
            props.setIsValidInput(false);
        }
    };

    const ages = Array.from({ length: 70 }, (_, i) => parseInt(props.hear_current_age) + (i + 1));

    return (
        <div>
            시작 나이를 선택하세요(만 나이)
            <select onChange={handleSelectChange}>
                <option value="">나이 선택</option>
                {ages.map(age => (
                    <option key={age} value={age}>{age}</option>
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


export default Getage;
