import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Board from "./Components/Board";

const BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}`;


function App() {
  const [listOfBoards, setListOfBoards] = useState([]);
  const addNewBoard = () => {
    // Get board data from POST request
    /* TODO */
  };
  const getBoardList = () => {
    axios.get(`${BACKEND_URL}/boards`).then((result) => {
      setListOfBoards(result.data);
    });
  };

  const [currentBoard, setCurrentBoard] = useState(null);
  const updateCurrentBoard = (id) => {
    setCurrentBoard(id ? parseInt(id) : null);
  };

  const getCurrentBoardName = () => {
    if (currentBoard) {
      const current = listOfBoards.find(
        (element) => parseInt(element.id) === currentBoard
      );
      return current.name;
    } else {
      return null;
    }
  };

  useEffect(() => getBoardList, []);

  return (
    <main className="App">
      <Header
        listOfBoards={listOfBoards}
        newBoard={addNewBoard}
        updateCurrentBoard={updateCurrentBoard}
      ></Header>
      <Board
        currentBoard={currentBoard}
        currentBoardName={getCurrentBoardName()}
      ></Board>
    </div>
  );
}

export default App;
