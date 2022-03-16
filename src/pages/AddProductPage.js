import React from "react";
import AddItem from '../components/AddItem/AddItem'
import { useAuth } from 'hooks/use-auth';
import {Redirect} from 'react-router-dom';

const AddProductPage = () => {
    const {isAuth} = useAuth();
  return isAuth ?  (
    <div className="add_prod_wrap">
      <div className="add_prod_title">Создать карточку товара:</div>
      <AddItem />
    </div>
  ):(
    <Redirect to="/login" />  
  )
};

export default AddProductPage;
