import style from './About.module.css'

const About=()=>{
    return(
        <body class={style.body}>
        <div className={style.leyenda}>
            <h1>Creado por: Uruvsereg</h1>
            <h3>Julián González</h3>
            <div className={style.esc}>
                <h4>Misión V20-j-1726</h4>
                <h5>ing. Vanog</h5>
            </div>
            <div className={style.mj}>
                <h6>Entrada 001</h6>
                <p>Perdidos en el espacio entramos dentro del área de atracción gravitatioria de un planeta desolado, la nave está cayendo a gran velocidad, no sé que será de la tripulación y de la misión.</p>
                <h6>Entrada 002</h6>
                <p>Pocos somos los que hemos sobrevivido a la caída, por suerte nuestra médico abordo está bien y hemos divisado una cueva cerca.</p>
                <h6>Entrada 003</h6>
                <p>Adentrándonos en la cueva hemos ido encontrando unos pequeños pedazos de papiro enrollado, pero no hemos logrado descifrar cómo abrirlos, quizá en aquel atril esté la respuesta, la comida recolectada de la nave nos alcanzará para 25 días aproximadamente.</p>
                <h6>Entrada 004</h6>
                <p>En los pergaminos parece estar la identidad de cada habitante de este planeta, por el momento no hemos encontrado ni huesos, ni señales de vida, un grupo liderado por la sargento Akstar inició una expedición a lo largo del planeta, esperemos encuentren respuestas.</p>
            </div>
        </div>
        </body>
    )
}
export default About;