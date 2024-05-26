import './user_output.css'


const User_output = (props) =>{

        return(
            <div id='user-output-container'>
                시작연령 = {props.start_age}<br/>
                일하는 기간 = {props.working_years}<br/>
                초기연봉 = {props.initial_salary_before_tax}<br/>
                은퇴자금 = {props.startneeded_amount_age}
            </div>

        );
}

export default User_output;