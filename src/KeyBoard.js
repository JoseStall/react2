import React from 'react';
import './App.css';





const BoardCase = ({letter, onClick, index}) => (
            < button key={index} className="btn btn-primary" onClick={() => onClick(letter, index)}>{ letter }</button>
)

export default BoardCase
