import './calculate.css'
import { useState } from 'react'
import User_input from './user_input';
import User_output from './user_ouput';
import { Link } from 'react-router-dom';


const Calculate = () =>{

    const [start_age, setStart_age] = useState(0);
    const [working_years, setworking_years] = useState(0);
    const [initial_salary_before_tax, setinitial_salary_before_tax] = useState(0);
    const [startneeded_amount_age, setstartneeded_amount_age] = useState(0);


        return(
            <div id="cal_outer">
                <div id='calculate-container'>
                    <div id="cal-content1">
                        <User_input  setStart_age={setStart_age} setworking_years={setworking_years} 
                            setinitial_salary_before_tax={setinitial_salary_before_tax} setstartneeded_amount_age={setstartneeded_amount_age} />
                        </div>
                    <div id="cal-content2">
                        <User_output start_age={start_age} working_years={working_years} initial_salary_before_tax={initial_salary_before_tax} 
                        startneeded_amount_age= {startneeded_amount_age}></User_output>
                    </div>
                </div>
            </div>

        );
}

const Linktoresult = (props) => {
    return <Link to="/result"></Link>
}


export default Calculate;