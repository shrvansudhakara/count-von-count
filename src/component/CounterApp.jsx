import { useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter-app">
            <button
                className="increase-button"
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>
            <button
                className="decrease-button"
                onClick={count >= 0 ? () => setCount(count - 1) : setCount(0)}
            >
                Decrease
            </button>
            <button className="reset-button" onClick={() => setCount(0)}>
                Reset
            </button>
            <div className="count-button">
                <h1>{count}</h1>
            </div>
        </div>
    );
};
export default CounterApp;
