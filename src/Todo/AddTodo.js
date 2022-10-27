import React, { useState } from "react"
import PropTypes from 'prop-types'

const styles = {
  form: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  input: {
    minWidth: "70%",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
  },
  button: {
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    background: "#6dd319",
    color: "white",
  },
}

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("")

  function submitHandler(event) {
    event.preventDefault()

    if (value.trim()) {
      onCreate(value)
    }
  }

  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        style={styles.input}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" style={styles.button}>
        Add todo
      </button>
    </form>
  )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo
