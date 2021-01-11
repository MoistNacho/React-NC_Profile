import React, {memo, useRef, useState} from 'react';
import ImageInput from '../../image_input/Image_input';
import styles from './Item.module.css'

const AddItem = memo(({profileDB, userEmail, request, imgUpload}) => {
    const nameRef = useRef();
    const clanRef = useRef();
    const titleRef = useRef();
    const messageRef = useRef();
    const itemRef = useRef();

    const [image, setImage] = useState();
    const [imageLoading, setImageLoading] = useState(false);

    const imageChange = (img) =>{
        setImage(img.public_id);
    }

    const submitDB = async(event) => {
        event.preventDefault();
        if(!nameRef.current.value){
            alert("Name을 입력하세요");
            return;
        } else if(!clanRef.current.value){
            alert("Clan을 선택하세요");
            return;
        } else if(!titleRef.current.value){
            alert("Title을 입력하세요");
            return;
        } else if(imageLoading){
            alert("이미지 업로드 중입니다");
            return;
        }

        const profile = {
            name: nameRef.current.value,
            clan: clanRef.current.value,
            title: titleRef.current.value,
            message: messageRef.current.value,
            imgId: image || '',
            key: Date.now()
        }
     
        await profileDB.save(userEmail, profile);

        request(userEmail);
        setImage(null);
        itemRef.current.reset();
    }

    return (
        <form className={styles.item} ref={itemRef}>
            <article className={styles.info}>
                <div className={styles.info_head}>
                    <div className={`${styles.info_label} ${styles.info_name}`}>
                        <span>Name</span>
                        <input className={styles.input} ref={nameRef} type="text" placeholder="input your name"/>
                    </div>        
                    <div className={`${styles.info_label} ${styles.info_title}`}>
                        <span>Title</span>
                        <input className={styles.input} ref={titleRef} type="text" placeholder="input your title"/>
                    </div>
                    <div className={`${styles.info_label} ${styles.info_clan}`}>
                        <span>Clan</span>
                        <select className={styles.select} ref={clanRef} defaultValue="">
                            <option value="" disabled>Life Path</option>
                            <option value="Nomad">Nomad</option>
                            <option value="Streetkid">Streetkid</option>
                            <option value="Arasaka">Arasaka</option>
                        </select>
                    </div>         
                </div>
                <div className={styles.info_message}>
                    <div>Message</div>
                    <div className={styles.text_box}>
                        <textarea className={styles.textarea} ref={messageRef} placeholder="input your message"/>
                    </div>            
                </div>
            </article>
            <div className={styles.border}></div>
            <article className={styles.btns}>
                <ImageInput imageChange={imageChange} imageLoading={imageLoading} setImageLoading={setImageLoading} imgUpload={imgUpload} />          
                <button className={styles.button} onClick={submitDB}>Add</button>
            </article>  
        </form>
    );
});

export default AddItem;