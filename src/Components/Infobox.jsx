import styles from "./Infobox.module.css";

function InfoBox(props){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.text}>{props.message}</p>
            <button>Learn More</button>
        </div>
    )
}
export default InfoBox
