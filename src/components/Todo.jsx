import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, switchButton } from "../redux/modules/todos";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const handeDeleteButtonOnclick = () => {
    dispatch(deleteTodo(todo.id));
  };

  const switchButtonOnClick = () => {
    dispatch(switchButton(todo.id, todo.isDone));
  };

  return (
    <TodoWrapper>
      <TodoContentWrapper>
        <div>{todo.title}</div>
        <p>{todo.contents}</p>
      </TodoContentWrapper>
      <TodoButttonWrapper>
        <CustomButton
          onClick={switchButtonOnClick}
          backgroundColor="rgb(33, 174, 255)"
        >
          {todo.isDone ? "취소" : "완료"}
        </CustomButton>
        <CustomButton
          onClick={handeDeleteButtonOnclick}
          backgroundColor="rgb(38, 38, 38)"
        >
          삭제
        </CustomButton>
      </TodoButttonWrapper>
    </TodoWrapper>
  );
}

const CustomButton = styled.button`
  backgroundcolor: color;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  border: none;
  height: 40px;
  width: calc(50vh - 4px);
  cursor: pointer;
`;

const TodoWrapper = styled.div`
  width: 250px;
  height: 150px;
  border: none;
  background-color: rgb(239, 239, 239);
  border-radius: 10px;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 16px;
`;

const TodoContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    font-size: 26px;
    font-weight: 700;
  }
`;

const TodoButttonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export default Todo;
