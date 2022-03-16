import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Nav.css";
import { useAuth } from "hooks/use-auth";
import {removeUser} from '../../store/slices/userSlice' 

const Nav = () => {
    const {isAuth,email} = useAuth()
    const dispatch = useDispatch()
  return (
    <div className="nav">
      <div className="container">
        <div className="nav_wrap">
          <div className="nav_logo">Logo</div>
          <div className="nav_menu">
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>

              { isAuth ? (
                <>
                  <li>
                    <Link to="/addproduct">Добавить товар</Link>
                  </li>
                  <li>
                    <Link to="/product">Товары</Link>
                  </li>
                </>
              ) : null}
              { !isAuth ? (
                <>
                <li>
                <Link to="/login">Войти</Link>
              </li>
              <li>
                <Link to="/register">Регистрация</Link>
              </li>
                </>
              ) : null}
            
            </ul>
          </div>
         {
             isAuth ? (
                <div className="nav_user">
              <button onClick={()=>dispatch(removeUser())}>Logout</button> from user: {email}
          </div>
             ) : null
         }
        </div>
      </div>
    </div>
  );
};

export default Nav;
