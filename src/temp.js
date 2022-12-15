import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(initialState);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (e) => {
    e.preventDefault(); //onsubmit 이 가진 기본 새로고침 없애줌

    // title 과 contents 를 가져와서 todos 에 넣어줌
    // setState 를 사용해야만 값을 변경할 수 있기 때문에,
    // 먼저 새로운 투두리스트를 만들어줌
    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    // 기존 투두에 새로운 투두를 붙여준다.
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  return (
    <>
      <header>헤더입니다</header>
      <main>
        <section
          style={{
            border: "1px solid black",
            padding: "20px",
          }}
        >
          <form onSubmit={handleSubmitClick}>
            제목 :{" "}
            <input
              placeholder="제목을 입력하세요!"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            내용 :{" "}
            <input
              placeholder="내용을 입력하세요!"
              value={contents}
              onChange={(e) => {
                setContents(e.target.value);
              }}
            />
            <button>추가</button>
          </form>
        </section>
        <p>Working..🔥</p>
        <section
          style={{
            display: "flex",
          }}
        >
          {todos
            .filter((item) => item.isDone === false)
            .map((item) => {
              return (
                <div
                  style={{
                    backgroundColor: "#c4a09b",
                    margin: "10px",
                  }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.contents}</p>
                  <button>완료</button>
                  <button>삭제</button>
                </div>
              );
            })}
        </section>
        <p>Done..!🎉</p>
        <section
          style={{
            display: "flex",
          }}
        >
          {todos
            .filter((item) => item.isDone === true)
            .map((item) => {
              return (
                <div
                  style={{
                    backgroundColor: "#c4a09b",
                    margin: "10px",
                  }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.contents}</p>
                  <button>완료</button>
                  <button>삭제</button>
                </div>
              );
            })}
        </section>
      </main>
      <footer>Footer입니다.</footer>
    </>
  );
}

const initialState = [
  {
    title: "제목1",
    contents: "내용",
    isDone: false,
    id: 1,
  },
  {
    title: "제목2",
    contents: "내용",
    isDone: false,
    id: 2,
  },
  {
    title: "제목3",
    contents: "내용",
    isDone: true,
    id: 3,
  },
];

// export default App;
