import './calculate.css';
import { useState } from 'react';
import User_input from './user_input';
import User_output from './user_ouput';
import { Link } from "react-router-dom";



const Calculate = () => {
    const [current_age, setCurrent_age] = useState(0); //현재나이
    const [start_age, setStart_age] = useState(0); //입사연령
    const [working_years, setworking_years] = useState(0); //근무기간
    const [initial_salary_before_tax, setinitial_salary_before_tax] = useState(0); //초봉
    const [retiremonet_age, setRetirement_age] = useState(0);//은퇴연령

    const [islast , setIslast] = useState(false);


    return (
        <div id="cal_outer">
            <div id='calculate-container'>
                <div id="cal-content1">
                    <User_input
                        setCurrent_age={setCurrent_age} //나이설정
                        setStart_age={setStart_age}//입사연령설정
                        setworking_years={setworking_years}//근무기간설정
                        setinitial_salary_before_tax={setinitial_salary_before_tax}//초봉설정
                        setRetirement_age={setRetirement_age}//은퇴연령설정
                        setIslast={setIslast}
                    />
                    {islast && <button><Link to="/result" state={{current_age:current_age, start_age:start_age,
                    initial_salary_before_tax:initial_salary_before_tax, retiremonet_age:retiremonet_age }}>계산하기</Link></button>}
                </div>
                <div id="cal-content2">
                    <User_output
                        current_age={current_age}
                        start_age={start_age}
                        initial_salary_before_tax={initial_salary_before_tax}
                        retiremonet_age={retiremonet_age}
                    />
                </div>
            </div>
        </div>
    );
};



export default Calculate;