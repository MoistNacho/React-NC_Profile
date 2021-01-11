import React from 'react';
import styles from './SignIn.module.css';

const SignIn = ({authService}) => {
    const onClick = (event) => {
        const socialName = event.currentTarget.name;
        authService.signIn(socialName);
    }
 
    return (
        <div className={styles.login}>
            <button className={styles.btn} onClick={onClick} name="google">
                <span className={styles.btn__content}><i className={`${styles.icon} fab fa-google`} />Google Login_</span>
                <span className={styles.btn__glitch}></span>
                <span className={styles.btn__label}>r21</span>
            </button>
            <button className={styles.btn} onClick={onClick} name="github">
                <span className={styles.btn__content}><i className={`${styles.icon} fab fa-github`}></i>Github Login_</span>
                <span className={styles.btn__glitch}></span>
                <span className={styles.btn__label}>r22</span>
            </button>
        </div>
    );
}


export default SignIn;