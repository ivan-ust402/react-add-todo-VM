import React from "react";

const styles = {
    form: {
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: ".5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
    },
    input: {
        minWidth: '70%',
        padding: ".5rem 1rem",
        border: "1px solid #ccc"
    },
    button: {
        padding: ".5rem 1rem",
        border: "1px solid #ccc",
        background: '#6dd319',
        color: 'white',
    }
}

function AddTodo() {
    return (
        <form style={styles.form}>
            <input type="text" style={styles.input} />
            <button type="submit" style={styles.button}>Add todo</button>
        </form>
    )
}

export default AddTodo