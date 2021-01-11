import React, { memo } from 'react';
import styles from './SignOut.module.css'

const SignOut = memo(({authService}) => {
    const onClick = () => {
        authService.signOut();
    };

    return (
        <div className={styles.scroll}>
            <button className={styles.button} onClick={onClick}>LOGOUT</button>        
        </div>
         
    );
});


export default SignOut;