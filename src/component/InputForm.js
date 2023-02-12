import React from "react";
import "./InputForm.css";
import { useState } from "react";

const InputForm = ({ onInsertComment }) => {
  const [inputId, setInputId] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputIt, setInputIt] = useState("");

  const onChangeId = (e) => {
    setInputId(e.target.value);
  };

  const onChageCategory = (e) => {
    setInputCategory(e.target.value);
  };

  const onChageIt = (e) => {
    setInputIt(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertComment({ inputId, inputCategory, inputIt });
    setInputId("");
    setInputCategory("");
    setInputIt("");
  };

  return (
    <form className="form">
      <div className="formInput">
        <div className="nameInput inputForm">
          <label for="name">ID CODE:</label>
          <input
            placeholder="WRITE IT HERE"
            type="text"
            name="name"
            id="name"
            value={inputId}
            onChange={onChangeId}
            required
          ></input>
        </div>
        <div className="titleInput inputForm">
          <label for="title">WHAT DO YOU WANT:</label>
          <input
            placeholder="WRITE IT HERE"
            type="text"
            name="title"
            id="title"
            value={inputCategory}
            onChange={onChageCategory}
            required
          ></input>
        </div>
        <div className="textInput inputForm">
          <label for="content">WHAT IS IT:</label>
          <textarea
            placeholder="WRITE IT HERE"
            type="text"
            name="content"
            id="content"
            value={inputIt}
            onChange={onChageIt}
            required
          ></textarea>
        </div>
        <button type="submitBtn" onClick={onSubmit}>
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default InputForm;
