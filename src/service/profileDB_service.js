import { fbFirestore } from './firebase';

class ProfileDB{
    async save(userEmail, profile){
        await fbFirestore.collection(`${userEmail}`).doc(`${profile.key}`).set(profile);
    }

    async remove(userEmail, key){
        await fbFirestore.collection(`${userEmail}`).doc(`${key}`).delete()
    }

    async request(userEmail){
        const profiles = [];
        await fbFirestore.collection(`${userEmail}`).orderBy("key").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                profiles.push(doc.data());        
            });
        });
        
        return profiles;
    }
}

export default ProfileDB;