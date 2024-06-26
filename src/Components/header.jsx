import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {
    const [isLogin, setLogin] = useState(false);
    return (
        <div id="head-container">
            <header id="head">
                <div className="head-3">
                    <Link to="/" id="head-name-link"><h1 id="head-name">Retire Plan</h1></Link>
                </div>
                <div className="head-3">
                    <ul className="head_li">
                        <li className="head_li-sub1"><Link to="/planning" className="head_li-sub1-link">Planning</Link></li>
                        <li className="head_li-sub1"><Link to="/pricing" className="head_li-sub1-link">Pricing</Link></li>
                        <li className="head_li-sub1"><Link to="/about" className="head_li-sub1-link">About</Link></li>
                        <li className="head_li-sub1"><Link to="/enter" className="head_li-sub1-link">Enterprise</Link></li>
                    </ul>
                </div>
                <div className="head-3">
                    <ul className="head_li">
                        <li className="head_li-sub2">icon1</li>
                        {/* <li className="head_li-sub2"><Link to="/sign_in" className="head_li-sub2-link">{ isLogin : sign in</Link></li> */}
                        <li className="head_li-sub2"> { isLogin ? 
                        <button className="head_li-sub2-link">sign out</button> :
                        <button className="head_li-sub2-link" ><Link to="/sign_in">sign in</Link></button>}
                        </li> 
                        <li className="head_li-sub2">my</li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;

