import styles from './CoreValues.module.css';
import 'font-awesome/css/font-awesome.min.css';

export default function CoreValues() {
    return (
        <div className={styles['core-values-container']}>
            <div className={styles['us']}>
                <i className={`${styles['us-icon']} fa fa-home cards-hover`}></i>
                <h3 className={styles['us-title']}>About Us</h3>
                <p className={styles['us-text']}>"We are your best alternative. We immerse ourselves in your business, develop your ideas, reorganize your project-everything to enhance your profits and fulfill your dreams."</p>
            </div>

            <div className={styles['mision']}>
                <i className={`${styles['mision-icon']} fa fa-rocket`}></i>
                <h3 className={styles['mision-title']}>Mission</h3>
                <p className={styles['mision-text']}>"Our mission is to support our clients in the creation, development, and consolidation of their businesses, working on their sustained growth, market presence, and new ventures, by providing advisory services."</p>
            </div>

            <div className={styles['vision']}>
                <i className={`${styles['vision-icon']} fa fa-globe`}></i>
                <h3 className={styles['vision-title']}>Vision</h3>
                <p className={styles['vision-text']}>"To be a leading company in providing advisory services to SMEs, recognized for the quality and efficiency of the services offered, with innovative and technological solutions that meet the needs of our clients."</p>
            </div>

            {/* <div className={styles.coreValues}>
                <img className={styles['img-style']} 
                    src="https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg" alt="Venom y Spider-Man" />
                <img className={styles['img-style']} 
                    src="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-venom-4k-legal-13jul23?$1600px$" alt="Venom en Marvel's Spider-Man 2" />
                <img className={styles['img-style']} 
                    src="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-story-duo-4k-legal-13jul23?$1600px$" alt="Spider-Man y Miles Morales en Marvel's Spider-Man 2" />
                <img className={styles['img-style']} 
                    src="https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg" alt="Venom y Spider-Man" />
                <img className={styles['img-style']} 
                    src="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-venom-4k-legal-13jul23?$1600px$" alt="Venom en Marvel's Spider-Man 2" />
                <img className={styles['img-style']} 
                    src="https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-screenshot-story-duo-4k-legal-13jul23?$1600px$" alt="Spider-Man y Miles Morales en Marvel's Spider-Man 2" />
            </div> */}
        </div>
    );
}