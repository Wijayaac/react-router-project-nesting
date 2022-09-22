import React, { useRef, useState } from "react";

import style from "./style.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const errorLabel = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !email) {
      showError("Please fill the field correctly");
    }

    let randomId,
      age = Math.floor(Math.random() * 90 + 10);

    let data = {
      id: randomId,
      name,
      age,
      email,
    };
  };
  const showError = (msg) => {
    errorLabel.current.innerHTML = msg;
  };
  return (
    <div className={style.wrapper}>
      <h3>Add Member</h3>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.input}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="email">Email</label>
          <input
            type="number"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <span ref={errorLabel} className={style.error}></span>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
