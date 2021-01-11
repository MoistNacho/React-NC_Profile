import React, {useEffect} from 'react';
import SignIn from '../components/auth/SignIn';
import { useHistory } from "react-router-dom";
import styles from './Auth.module.css';


const Auth = ({authService}) => {   
    const history = useHistory();

    const goTo = (userEmail) =>{
        history.push({
            pathname: '/profile',
            state: {email: userEmail}
        }); 
    }

    useEffect(()=>{
        authService.authState(user => {
            user && goTo(user.email);
        });
    });


    return (
        <div className={styles.bg}>
            <section className={styles.section}>
                <div className={styles.title}>Cyberpunk</div>
                <div className={styles.subTitle}>Profile</div>
                <SignIn authService={authService} />
                <i className={`${styles.barcode} fas fa-qrcode`}></i> 
            </section> 
        </div>       
    );
};

export default Auth;