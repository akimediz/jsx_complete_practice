//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
const myname = "Morakinyo Abdulakeem";
const realdate = new Date();
const year = realdate.getFullYear();
ReactDOM.render(
  <div>
    <p>created by {myname} </p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
