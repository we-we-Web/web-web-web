import styles from './TitleName.module.css';
import Button from './Button';
import Image from 'next/image';
import myImage from '../IMG_8760.jpg';

export default function TitleName() {
    return (
        <div className={styles.title}>
            <div>
                <p>Web Project</p>
                <p className={styles.subtitle}>
                    This team website of 2024 web programming in NTOU which led by Ateto
                </p>
                <Button/>
            </div>
            <Image className={styles.pic} src={myImage} alt="My Image"/>
        </div>
    );
}

