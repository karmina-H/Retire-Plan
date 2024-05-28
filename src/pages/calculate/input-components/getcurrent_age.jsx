import React from "react";
import { useState } from "react";

const Getcurrent_age = (props) => {


    const [errorMessage, setErrorMessage] = useState("");

    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (validatePositiveNumber(value)) {
            props.setCurrent_age(value);
            props.sethear_current_age(value);
            setErrorMessage("");
            props.setIsValidInput(true);
        } else {
            setErrorMessage("올바른 숫자를 입력하세요");
            props.setIsValidInput(false);
        }
    };

    const ages = Array.from({ length: 70 }, (_, i) => i + 1);

    return (
        <div>
             현재나이를 입력하세요(만나이)
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

export default Getcurrent_age;