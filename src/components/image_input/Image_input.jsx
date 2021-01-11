import React, { memo } from 'react';
import styles from './Image_input.module.css'

const ImageInput = memo(({imageChange, imageLoading, setImageLoading, imgUpload}) => {

    const onChange = async(e) => {
        setImageLoading(true);
        const img = await imgUpload.upload(e.target.files[0]);
        imageChange(img);
        setImageLoading(false);
    }

    return (
        <div>
            <input className={styles.imgInput} type="file" id="upload" name="Upload" accept="image/*" onChange={onChange}/>
            {
                imageLoading ? 
                <div className={styles.loading}></div> 
                : 
                <label className={styles.img_label} htmlFor="upload">Image Upload</label>
            }
        </div>  
    );
});

export default ImageInput;