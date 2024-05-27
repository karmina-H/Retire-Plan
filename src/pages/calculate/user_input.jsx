import './user_input.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const User_input = (props) => {
    const [current_page, setCurrent_page] = useState(1);
    const [isValidInput, setIsValidInput] = useState(false); // 수정

    const nextPage = () => {
        if (isValidInput && current_page < 4) {
            setCurrent_page(prev => prev + 1);
        }
    };
    
    const prevPage = () => setCurrent_page(prev => prev - 1);

    return (
        <div id='user-input-container'>
            {current_page === 1 && <Getage setStart_age={props.setStart_age} setCurrent_page={setCurrent_page} setIsValidInput={setIsValidInput} />}
            {current_page === 2 && <Getyears setworking_years={props.setworking_years} setCurrent_page={setCurrent_page} setIsValidInput={setIsValidInput} />}
            {current_page === 3 && <Getsalary setinitial_salary_before_tax={props.setinitial_salary_before_tax} setCurrent_page={setCurrent_page} setIsValidInput={setIsValidInput} />}
            {current_page === 4 && <Getamount setstartneeded_amount_age={props.setstartneeded_amount_age} setCurrent_page={setCurrent_page} setIsValidInput={setIsValidInput} />}
            
            <div>
                <Back_button current_page={current_page} prevPage={prevPage} />
                {current_page === 4 ? <Cal_button isValidInput={isValidInput}/> : <Next_button nextPage={nextPage} isValidInput={isValidInput} />}
            </div>
        </div>
    );
};

const Next_button = ({ nextPage, isValidInput }) => {
    return <button onClick={nextPage} disabled={!isValidInput}>다음</button>;
};

const Cal_button = ({isValidInput}) => {
    return <Link to="/result" ><button disabled={!isValidInput}>계산하기</button></Link>;
};

const Back_button = ({ current_page, prevPage }) => {
    return <button onClick={prevPage} disabled={current_page === 1}>뒤로</button>;
};

const validatePositiveNumber = (value) => {
    const number = parseFloat(value);
    return !isNaN(number) && number > 0;
};

const Getage = (props) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [inputValue, setInputValue] = useState(""); // 수정

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // 수정

        if (validatePositiveNumber(e.target.value)) {
            props.setStart_age(e.target.value);
            setErrorMessage("");
            props.setIsValidInput(true);
        } else {
            setErrorMessage("올바른 숫자를 입력하세요");
            props.setIsValidInput(false);
        }
    };

    return (
        <div>
            연령을 입력하세요
            <input type="number" value={inputValue} onChange={handleInputChange} />
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};



const Getyears = (props) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [inputValue, setInputValue] = useState(""); // 수정
    if(inputValue === ""){
        props.setIsValidInput(false);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // 수정


        if (validatePositiveNumber(e.target.value)) {
            props.setworking_years(e.target.value);
            setErrorMessage("");
            props.setIsValidInput(true);
        } else {
            setErrorMessage("올바른 숫자를 입력하세요");
            props.setIsValidInput(false);
        }
    };

    return (
        <div>
            일하는 기간을 입력하세요
            <input type="number" value={inputValue} onChange={handleInputChange} />
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

const Getsalary = (props) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [inputValue, setInputValue] = useState(""); // 수정
    if(inputValue === ""){
        props.setIsValidInput(false);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // 수정

        if (validatePositiveNumber(e.target.value)) {
            props.setinitial_salary_before_tax(e.target.value);
            setErrorMessage("");
            props.setIsValidInput(true);
        } else {
            setErrorMessage("올바른 숫자를 입력하세요");
            props.setIsValidInput(false);
        }
    };

    return (
        <div>
            연봉을 입력하세요
            <input type="number" value={inputValue} onChange={handleInputChange} />
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

const Getamount = (props) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [inputValue, setInputValue] = useState(""); // 수정
    if(inputValue === ""){
        props.setIsValidInput(false);
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // 수정

        if (validatePositiveNumber(e.target.value)) {
            props.setstartneeded_amount_age(e.target.value);
            setErrorMessage("");
            props.setIsValidInput(true);
        } else {
            setErrorMessage("올바른 숫자를 입력하세요");
            props.setIsValidInput(false);
        }
    };

    return (
        <div>
            필요 은퇴자금을 입력하세요
            <input type="number" value={inputValue} onChange={handleInputChange} />
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};



export default User_input;