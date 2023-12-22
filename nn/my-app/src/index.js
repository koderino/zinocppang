import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
var root= ReactDOM.createRoot(container);
root.render(<h1>hello</h1>);

var a = {f:1, l:2};
var b = { l:"b"};
var c = {f:{...a, f:3}};
var d = {...a,...b};
var e = {...b,...a};
var f ={...a,...b,...c};
console.info(d);
console.info(f);

var key = "zinocpp";
var val = 42195;

var g = {...f, [key]:val};
console.info(g);

var arr1 = ['a','b','c','d'];
var arr2 = arr1.filter((item,index)=>index!=0);
console.info(arr2);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
