// Button Component

// import styles from './Button.module.css'

// Inline Styling
function Button(){
    
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    
    return(
        /*<button className={styles.button}>Click Me!</button> ---> Modules*/ 
        <button style={styles}>Click me</button> // Inline Styling
    );
}

export default Button

