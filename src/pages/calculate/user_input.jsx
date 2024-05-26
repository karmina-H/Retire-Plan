import './user_input.css'


const User_input = (props) =>{

    const current_page = 1;


                if(current_page === 1){
                    return(  <div id='user-input-container'><Getage setStart_age={props.setStart_age}/> </div>);
                }else if(current_page=== 2){
                    
                    return(  <div id='user-input-container'><Getyears setworking_years={props.setworking_years}/></div>);
                }else if(current_page === 3){
                    
                    return(  <div id='user-input-container'><Getsalary setinitial_salary_before_tax={props.setinitial_salary_before_tax}/> </div>);
                }else{
                    return(  <div id='user-input-container'><Getamount setStartsetinitial_salary_before_tax_age={props.setinitial_salary_before_tax}/> </div>);
                }
            

}

const Getyears = (props) =>{
    props.setworking_years(0);

    return(
        <div>
        일하는 기간을 입력하세요
        </div>
        
    );
}

const Getsalary = (props) =>{
    props.setinitial_salary_before_tax(0);

    return(
        <div>
       연봉을 입력하세요
        </div>

    );
}
const Getamount = (props) =>{
    props.setStartsetinitial_salary_before_tax_age(0);
    return(
        <div>
        필요 은퇴자금을 입력하세요
        </div>

    );
}


const Getage = (props) =>{

    props.setStart_age(0);
    return(
         <div>
       연령을 입력하세요
        </div>

    );
}
export default User_input;