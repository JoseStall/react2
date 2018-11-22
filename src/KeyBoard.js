import React from 'react';
import './App.css';

const BoardCase = ({letter, onClick, index, feedback}) => (
            < button key={index} className={`btn btn-primary ${feedback}`} onClick={() => onClick(letter, index)}>{ letter }</button>
)

export default BoardCase

