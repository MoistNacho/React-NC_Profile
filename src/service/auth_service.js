import {fbAuth, googleAuth, githubAuth, authPersistence} from './firebase';

class AuthService {
    signIn(socialName) {
        let provider;

        if(socialName === 'google'){
            provider = googleAuth;
        } else if (socialName === 'github'){
            provider = githubAuth;
        }

        fbAuth.setPersistence(authPersistence)
        .then(() => {
            fbAuth.signInWithPopup(provider);
        });
    };

    signOut(){
        fbAuth.signOut()
        .catch(error => console.log(error));
    };

    authState(onUserCallback){
        fbAuth.onAuthStateChanged(user => {
            onUserCallback(user);
        });
    };
}

export default AuthService;