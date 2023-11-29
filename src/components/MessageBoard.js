import React, { useState, useEffect } from "react";
import './MessageBoard.css';
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import { useForm, ValidationError } from '@formspree/react';

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

const [state, handleSubmit] = useForm("xqkvvygp");
const yes = document.getElementById('yes-rsvp');
const no = document.getElementById('no-rsvp');

if (state.succeeded && yes.checked) {
      return <p>Can't wait to see you!</p>;
} else if (state.succeeded && no.checked) {
  return <p>We'll miss you!</p>;
} return (
    <div className='message-board-container'>
      <div className="rsvp-container">
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Camper:
        </label>
        <input
          id="name"
          type="name" 
          name="name"
        />
        <div id="wrapper">
          Can you attend?
        <div className="radio">
          <label>
            <input id="yes-rsvp" name="rsvp" type="radio" value="yes"/>
            YES
          </label>
        </div>
        <div className="radio">
          <label>
            <input id="no-rsvp" name="rsvp" type="radio" value="no" />
            No :(
          </label>
        </div>
        </div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
        </form>
      </div>
      <div>
        <div className="post-input">
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Anything else to say?"
            onKeyPress={(e) => keyPress(e)}
            ></input>
          <button onClick={newItem}>Pin it</button>
        </div>
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
    </div>
  )
}

export default MessageBoard