import styles from '../styles/Blog.module.css'
import Image from 'next/image';

const Blog = () => {
    return (
        <div className={styles.row}>
            <div className='leftcolumn'>
                <div className={styles.card}>
                    <h2>Dit is het logo</h2>
                    <h5>25 Februari 2022</h5>
                    <div className={styles.fakeimg}><Image src='/Logo.png' width="128" height="128"></Image></div>
                    <p>Da's leuk hè</p>
                </div>
                <div className={styles.card}>
                    <h2>Hallo dit is de eerste post</h2>
                    <h5>25 Februari 2022</h5>
                    <p>Maar dit is puur iets van een test ofzo</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;