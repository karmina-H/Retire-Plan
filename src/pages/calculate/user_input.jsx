import './user_input.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Getage from './input-components/getage';
import Getcurrent_age from './input-components/getcurrent_age';
import Getretire_age from './input-components/getretire_age';
import Getsalary from './input-components/getsalary';


const User_input = (props) => {
    const [current_page, setCurrent_page] = useState(1);
    const [isValidInput, setIsValidInput] = useState(false); // 수정


    const [hear_current_age, sethear_current_age] = useState(0);
    const [hear_start_age, sethear_start_age] = useState(0);


    const nextPage = () => {
        if (isValidInput && current_page < 4) {
            setCurrent_page(prev => prev + 1);
        }
    };

    useEffect(() => {
        setIsValidInput(false);
    }, [current_page]);
    
    const prevPage = () => setCurrent_page(prev => prev - 1);

    return (
        <div id='user-input-container'>
            {current_page === 1 && <Getcurrent_age 
                                        setCurrent_age={props.setCurrent_age} 
                                        setCurrent_page={setCurrent_page} 
                                        setIsValidInput={setIsValidInput} 
                                        sethear_current_age={sethear_current_age}/>}
            {current_page === 2 && <Getage 
                                        setStart_age={props.setStart_age} 
                                        setCurrent_page={setCurrent_page} 
                                        setIsValidInput={setIsValidInput} 
                                        hear_current_age={hear_current_age} 
                                        sethear_start_age={sethear_start_age}/>}
            {current_page === 3 &&  <Getsalary 
                                        setinitial_salary_before_tax={props.setinitial_salary_before_tax} 
                                        setCurrent_page={setCurrent_page} 
                                        setIsValidInput={setIsValidInput}/>}
            {current_page === 4 && <Getretire_age 
                                        setRetirement_age={props.setRetirement_age} 
                                        setCurrent_page={setCurrent_page} 
                                        setIsValidInput={setIsValidInput} 
                                        setIslast={props.setIslast}
                                        hear_start_age={hear_start_age}/>}
           
            
            <div>
                <Back_button current_page={current_page} prevPage={prevPage} />
                {current_page === 4 ? null : <Next_button nextPage={nextPage} isValidInput={isValidInput} />}
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





export default User_input;