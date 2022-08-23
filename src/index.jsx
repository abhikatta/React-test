import React, { useState } from 'react';
import './index.css'
import ReactDom from 'react-dom'
/*
Add Difficulty levels:
const DisplayMain = () => {
const ChooseDifficulty
}
    const incrementby10 = () => {
        setCounter(counter + 10);
    };
    const incrementby100 = () => {
        setCounter(counter + 100);
    };

*/
const GuessingGame = () => {

    const [counter, setCounter] = useState(0);
    const [guess, setGuess] = useState("How's your guess?");

    const Increment = () => {
        setCounter(counter + 1);
    };
    const Decrement = () => {
        setCounter(counter - 1);
    };
    const Check = () => {
        let guessnum = 14;
        if (counter > guessnum) {
            setGuess("More than guess value");
        }
        else if (counter < guessnum) {
            setGuess("Less than guess value");
        }
        else if (counter === guessnum) {
            setGuess("Bingo!");
        }
    }
    return (
        <>
            <div id="counter">
                {counter}
            </div>
            <br></br>
            <button className='buttons' onClick={Increment}>Increment</button>
            <button className='buttons' onClick={Decrement}>Decrement</button>
            <br></br>
            <button className='buttons' onClick={Check}>Check</button>
            <div id='guess'>
                {guess}
            </div>
        </>
    );
};

const Fonts = () => <link href='https://fonts.googleapis.com/css?family=Montserrat' rel="stylesheet"></link>
// reactdom is not used from version 18 but without it my shit wont display on the screen
ReactDom.render(<GuessingGame />, document.getElementById("root"));
ReactDom.render(<Fonts />, document.getElementById("links"));