import React, { useState, useEffect } from "react";
import './MessageBoard.css';
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";

function MessageBoard() {
  var randomColor = require("randomcolor");

const [item, setItem] = useState("");
const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
useEffect(() => {
  localStorage.setItem("items", JSON.stringify(items));
}, [items]);

  const keyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      newItem();
    }
  };

  const newItem = () => {
    if (item.trim() !== "") {
      const newItem = {
        id: uuidv4(),
        item: item,
        color: randomColor({luminosity: 'light'}),
        defaultPosition: {x: 100, y: 0}
      };
      setItems((items) => [...items, newItem]);
      setItem("");
    } else {
      alert("Enter an item");
      setItem("");
    }
  };

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
 };

 const deleteNote = (id) => {
  setItems(items.filter((item) => item.id !== id));
};

  return (
    <div className='housing-container'>
      <input
      value={item}
      onChange={(e) => setItem(e.target.value)}
      placeholder="Enter something..."
      onKeyPress={(e) => keyPress(e)}
      ></input>
    <button onClick={newItem}>ENTER</button>
    {items.map((item, index) => {
        return (
          <Draggable
            key={item.id}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePos(data, index);
            }}
          >
            <div style={{ backgroundColor: item.color }} className="box">
              {`${item.item}`}
              <button id="delete" onClick={(e) => deleteNote(item.id)}>
                X
              </button>
            </div>
          </Draggable>
        );
      })}
    </div>
  )
}

export default MessageBoard