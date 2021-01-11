import React, { memo, useRef } from 'react';
import styles from './Item.module.css';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import domtoimage from 'dom-to-image';
import 'file-saver';
import cloudinary from '../../../service/cloudinary.js';


const DEFAULT_IMG = "mam3fwfbdoq398xrzuws";

const Item = memo(({item}) => {
    const {cloud_name, upload_preset} = cloudinary;
    const {name, clan, title, message, imgId, key} = item;
    const itemRef = useRef();
    

    const itemSave = () => {
        domtoimage.toBlob(itemRef.current)
        .then((blob) => {
            window.saveAs(blob, `${name}.png`);
        });
    }

    return (
        <li ref={itemRef} className={styles.item}>
            <div className={styles.item_body}>
                <div className={styles.img}>
                    <CloudinaryContext cloudName={cloud_name} uploadPreset={upload_preset}>
                        <Image publicId={`${imgId ? imgId : DEFAULT_IMG}.png`} >
                            <Transformation width="200" height="200" gravity="face" crop="crop" />
                        </Image>
                    </CloudinaryContext>  
                </div>
                <div className={styles.info}>
                    <div className={styles.info_head}>
                        <em>
                            <span className={styles.name}>{name}</span>
                            <span className={styles.clan}>{clan}</span>  
                        </em>
                        <span className={styles.title}><em>{title}</em></span>  
                    </div>  
                    <span className={styles.message}>" {message} "</span>        
                </div>         
                <div className={styles.btn} onClick={itemSave}>
                    <i className="fas fa-share-square"></i>
                </div>
            </div>
            <div className={styles.item_footer}>
                <span>》 NetWire_Seed: {key}</span>  
            </div>
        </li>
    );
});

export default Item;