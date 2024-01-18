import styles from './styles.module.css'

import Image from 'next/image'

import ProfileImg from '@/assets/img/about_me_bg.jpeg'

const AboutMe = () => {
    return (
        <section id='about' className={styles.about_me}>
            <div className={styles.profile}>
                {/* <Image src={ProfileImg} alt='Imagem do Dr. Advogado Victor Santos' draggable={false} /> */}
            </div>
            <div className={styles.description}>
                <h1>Sobre mim</h1>
                <p>
                    Sou um advogado formado pela Faculdade do Sudeste Goiano em 2018, marcando o início da minha jornada no universo jurídico. Essa conquista acadêmica foi apenas o primeiro passo em minha carreira dedicada à justiça e ao direito.
                </p>
                <p>
                    Em 2019, obtive aprovação na Ordem dos Advogados do Brasil, um marco que reafirmou meu compromisso com a excelência jurídica. Desde então, venho atuando com zelo e precisão técnica, buscando sempre o melhor para os meus clientes.
                </p>
                <p>
                    Aos 28 anos, casado e com uma energia jovem, encaro cada desafio legal com vigor e determinação. Para mim, ser advogado é mais do que uma profissão; é uma missão de vida, pautada na ética, respeito e integridade.
                </p>
                <p>
                    Minha abordagem é centrada no cliente, com atenção aos detalhes e personalização em cada caso. Meu objetivo é oferecer soluções jurídicas eficazes, mantendo sempre a clareza e transparência. Estou aqui para atender suas necessidades legais, comprometido em alcançar os melhores resultados para você.
                </p>
            </div>
        </section>
    )
}

export default AboutMe