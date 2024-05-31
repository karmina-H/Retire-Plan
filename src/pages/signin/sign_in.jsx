import './sign_in.css'


const Sign_in = () =>{

    const handleLogin = () => {
        window.location.href = 'https://localhost:5000/login';
      };
    
        return(
            <div id='sign-container'>
                임시 페이지 -  sign_in
                <button onClick={handleLogin}>Login with Google</button>
            </div>

        );
}

export default Sign_in;