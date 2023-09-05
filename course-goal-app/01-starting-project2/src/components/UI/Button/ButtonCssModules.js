import styles from "./Button.module.css";
const ButtonCssModules = props => {
    return (
        <button type={props.type} className={styles.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default ButtonCssModules;
