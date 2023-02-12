import React, { useState } from "react";
import "./App.css";
import Template from "./component/Template";
import InputForm from "./component/InputForm";
// import Arrow from "./component/Arrow";
// import Comment from "./component/Comment";
import CommentList from "./component/CommentList";

function App() {
  const [list, setList] = useState([
    {
      id: "choi",
      category: "카테고리",
      it: "내용을 작성하는 란",
    },
    {
      id: "Gi",
      category: "예시 컨텐츠 2",
      it: "내용을 작성하는 란",
    },
    {
      id: "Rang",
      category: "예시 컨텐츠 3",
      it: "내용을 작성하는 란",
    },
  ]);

  // const onInsert = (text) => {
  //   setList([...list, { id: text }]);
  // };

  const onInsertComment = (text) => {
    const addList = {
      id: text.inputId,
      category: text.inputCategory,
      it: text.inputIt,
    };
    console.log("addList", addList);
    setList((list) => list.concat(addList));
  };

  return (
    <Template>
      <InputForm onInsertComment={onInsertComment} />
      {/* <Arrow /> */}
      <CommentList list={list} />
    </Template>
  );
}

export default App;
