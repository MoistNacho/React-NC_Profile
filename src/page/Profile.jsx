import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import SignOut from '../components/auth/SignOut';
import Editor from '../components/profile/Editor';
import styles from './Profile.module.css'
import Preview from '../components/profile/Preview';

const Profile = ({authService, profileDB, imgUpload}) => {
    const historyState = useHistory().state;
    const [userEmail, setUserEmail] = useState(historyState && historyState.email);
    const [profiles, setProfiles] = useState(null);

    const history = useHistory(); 

    const request = useCallback(async(email) => { 
        const profiles = await profileDB.request(email);   
        setProfiles([...profiles]);
    }, [profileDB]);

    useEffect(()=> {
        if(!userEmail){
            return;
        }
        request(userEmail);
    }, [userEmail, profileDB, request])

    useEffect(()=>{
        authService.authState((user) => {
            if (!user) {
                history.push("/login")
            } else{
                setUserEmail(user.email);  
            }
        });
    }, [userEmail, authService, history]);

    return (
        <div className={styles.bg}>           
            <SignOut authService={authService} />
            <main className={styles.profile}>
                <Editor userEmail={userEmail} profiles={profiles} request={request} profileDB={profileDB} imgUpload={imgUpload} />
                <Preview profiles={profiles} />
            </main>
        </div>               
    );
};

export default Profile;