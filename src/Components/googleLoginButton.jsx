import React from 'react';

const GoogleLoginButton = ({ isLogin, handleLoginLogout }) => {
    const handleClick = () => {
        if (isLogin) {
            // 로그아웃 처리
            handleLoginLogout();
            window.location.href = 'https://localhost:5000/logout';
        } else {
            // 로그인 처리
            window.location.href = 'https://localhost:5000/login';
        }
    };

    return (
        <button className="head_li-sub2-link" onClick={handleClick}>
            {isLogin ? 'Sign out' : 'Sign in'}
        </button>
    );
};

export default GoogleLoginButton;
