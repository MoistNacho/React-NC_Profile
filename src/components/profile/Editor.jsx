import React from 'react';
import styles from './Section.module.css';
import spinner from './Editor.module.css'
import EditItem from './edit_item/EditItem';
import AddItem from './edit_item/AddItem';

const Editor = ({userEmail, profiles, request, profileDB, imgUpload}) => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Profile Edit</h2>
            <div className={styles.border}></div>
            <article className={styles.box}>
                {
                    profiles ?
                    <>
                        {    
                            profiles.map(item => {
                                return <EditItem 
                                    userEmail={userEmail} 
                                    request={request} 
                                    item={item} 
                                    key={item.key}
                                    profileDB={profileDB}
                                />
                            })
                        }
                        <AddItem 
                            userEmail={userEmail} 
                            profiles={profiles} 
                            request={request}
                            imgUpload={imgUpload} 
                            profileDB={profileDB}
                        />
                    </>
                    :
                    <div className={spinner.loading}>Loading...</div>
                }                 
            </article>        
        </section>
    );
};
    

export default Editor;