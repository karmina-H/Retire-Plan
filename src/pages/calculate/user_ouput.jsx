import './user_output.css'


const User_output = (props) =>{

        return(
            <div id='user-output-container'>
                현재나이 = {props.current_age}
                입사연령 = {props.start_age}<br/>
                초기연봉 = {props.initial_salary_before_tax}<br/>
                은퇴연령 = {props.retiremonet_age}
            </div>

        );
}

export default User_output;