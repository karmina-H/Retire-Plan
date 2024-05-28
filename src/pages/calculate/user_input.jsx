import './user_input.css';
import { useState } from 'react';
import { useEffect } from 'react';


const User_input = (props) => {
    const [current_page, setCurrent_page] = useState(1);
    const [isValidInput, setIsValidInput] = useState(false); // 수정


    const nextPage = () => {
        if (isValidInput && current_page < 5) {
            setCurrent_page(prev => prev + 1);
        }
    };

    useEffect(() => {
        setIsValidInput(false);
    }, [current_page]);
    
    const prevPage = () => setCurrent_page(prev => prev - 1);

    return (
        <div id='user-input-container'>
            {current_page === 1 && <Getcurrent_age setCurrent_age={props.setCurrent_age} setCurrent_page={setCurrent_page} setIsValidInput={setIsValidInput}/>}
            {current_page === 2 && <Getage setStart_age={props.setStart_age} setCurrent_page={setCurrent_page} setIsValidInput={setIsValidInput}/>}
            {current_page === 3 && <Getyears setworking_years={props.setworking_years} setCurrent_page={setCurrent_page} setIsValidInput={setIsValidInput}  />}
            {current_page === 4 &&  <Getsalary setinitial_salary_before_tax={props.setinitial_salary_before_tax} setCurrent_page={setCurrent_page} setIsValidInput={setIsValidInput}/>}
            {current_page === 5 && <Getretire_age setRetirement_age={props.setRetirement_age} setCurrent_page={setCurrent_page} setIsValidInput={setIsValidInput} setIslast={props.setIslast}/>}
           
            
            <div>
                <Back_button current_page={current_page} prevPage={prevPage} />
                {current_page === 5 ? null : <Next_button nextPage={nextPage} isValidInput={isValidInput} />}
            </div>
        </div>
    );
};

const Next_button = ({ nextPage, isValidInput }) => {
    return <button onClick={nextPage} disabled={!isValidInput}>다음</button>;
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

    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (validatePositiveNumber(value)) {
            props.setStart_age(value);
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



const Getyears = (props) => {

    const [errorMessage, setErrorMessage] = useState("");

    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (validatePositiveNumber(value)) {
            props.setworking_years(value);
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
            일하는 기간을 입력하세요(년도)
            <select onChange={handleSelectChange}>
                <option value="">기간 선택</option>
                {ages.map(age => (
                    <option key={age} value={age}>{age}년</option>
                ))}
            </select>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );


    
};

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

const Getcurrent_age = (props) => {


    const [errorMessage, setErrorMessage] = useState("");

    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (validatePositiveNumber(value)) {
            props.setCurrent_age(value);
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


const Getretire_age = (props) => {


    const [errorMessage, setErrorMessage] = useState("");

    const handleSelectChange = (e) => {
        const value = e.target.value;
        if (validatePositiveNumber(value)) {
            props.setRetirement_age(e.target.value);
            setErrorMessage("");
            props.setIsValidInput(true);
            props.setIslast(true);
        } else {
            setErrorMessage("올바른 숫자를 입력하세요");
            props.setIsValidInput(false);
            props.setIslast(true);
        }
    };

    const ages = Array.from({ length: 70 }, (_, i) => i + 1);

    return (
        <div>
            은퇴 나이를 선택하세요(만 나이)
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


export default User_input;