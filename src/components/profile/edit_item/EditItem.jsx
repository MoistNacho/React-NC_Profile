import React, {useRef} from 'react';
import styles from './Item.module.css';

const EditItem = ({profileDB, userEmail, item, request, image}) => {
    const {name, clan, title, message, imgId, key} = item;

    const nameRef = useRef();
    const clanRef = useRef();
    const titleRef = useRef();
    const messageRef = useRef();
    const itemRef = useRef();

    const editItem = async(event) => {
        event.preventDefault();

        const profile = {
            name: nameRef.current.value,
            clan: clanRef.current.value,
            title: titleRef.current.value,
            message: messageRef.current.value,
            imgId: image?image:imgId,
            key: key
        }

        await profileDB.save(userEmail, profile);
        request(userEmail);
    }

    const deleteItem = async(event) =>{
        event.preventDefault();
        
        await profileDB.remove(userEmail, key);
        request(userEmail);
    }

    return (
        <form ref={itemRef} className={styles.item}>
            <article className={styles.info}>
                <div className={styles.info_head}>
                    <div className={`${styles.info_label} ${styles.info_name}`}>
                        <span>Name</span>
                        <input className={styles.input} ref={nameRef} type="text" defaultValue={name}/>
                    </div>        
                    <div className={`${styles.info_label} ${styles.info_title}`}>
                        <span>Title</span>
                        <input className={styles.input} ref={titleRef} type="text" defaultValue={title}/>
                    </div>
                    <div className={`${styles.info_label} ${styles.info_clan}`}>
                        <span>Clan</span>
                        <select className={styles.select} ref={clanRef} defaultValue={clan}>
                            <option value="Nomad">Nomad</option>
                            <option value="Streetkid">Streetkid</option>
                            <option value="Arasaka">Arasaka</option>
                        </select>
                    </div>         
                </div>
                <div className={styles.info_message}>
                    <div>Message</div>
                    <div className={styles.text_box}>
                        <textarea className={styles.textarea} ref={messageRef} defaultValue={message}/>
                    </div>            
                </div>
            </article>
            <div className={styles.border}></div>
            <article className={styles.btns}>
                <div>
                    <button className={styles.delete_btn} onClick={deleteItem}>Profile Delete</button>  
                </div>             
                <button className={styles.button} onClick={editItem}>Edit</button>
            </article> 
        </form>
    );
}

export default EditItem;