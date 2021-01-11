import React from 'react';
import Item from './cards/Item';
import styles from './Section.module.css'
import spinner from './Preview.module.css'

const Preview = ({profiles}) => {

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Preview</h2>
            <div className={styles.border}></div>
            <article className={styles.box}>
                <ul className={styles.list}>
                    {
                        profiles ? 
                        profiles.map(item =>{
                            return <Item key={item.key} item={item} />
                        })
                        : <div className={spinner.loading}>Loading...</div>
                    }
                </ul>
            </article>       
        </section>
    );
}

export default Preview;