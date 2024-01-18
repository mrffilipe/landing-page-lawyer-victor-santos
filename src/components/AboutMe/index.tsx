import styles from './styles.module.css'

import Image from 'next/image'

import ProfileImg from '@/assets/img/about_me_bg.jpeg'

const AboutMe = () => {
    return (
        <section id='about' className={styles.about_me}>
            <div className={styles.profile}>
                <Image src={ProfileImg} alt='Imagem do Dr. Advogado Victor Santos' draggable={false} />
            </div>
            <div className={styles.description}>
                <h1>Sobre mim</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mauris non diam sodales ultricies. Praesent malesuada auctor justo, at viverra elit gravida eu. Curabitur id odio sit amet diam vulputate condimentum eget a est. Curabitur suscipit viverra semper. Fusce vitae ex tincidunt,
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mauris non diam sodales ultricies. Praesent malesuada auctor justo, at viverra elit gravida eu. Curabitur id odio sit amet diam vulputate condimentum eget a est. Curabitur suscipit viverra semper. Fusce vitae ex tincidunt,
                </p>
            </div>
        </section>
    )
}

export default AboutMe