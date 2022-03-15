import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form} from './Form';
import {setUser} from 'store/slices/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({ 
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(error => {
                console.log(error.code)
                if(error.code === 'auth/wrong-password') {
                    alert('неправильній пароль')
                }
                if (error.code === 'auth/too-many-requests') {
                    alert('много запросов')
                }
            })
           
    }

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        />
    )
}

export {Login}
