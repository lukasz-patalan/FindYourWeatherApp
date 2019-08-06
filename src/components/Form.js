import React from 'react';
import "./Form.css"
export const Form = (props) => {
    return (
        <div  >
            <input className="typeCity" type="text"
                value={props.value}
                placeholder="Wpisz miasto..."
                onChange={props.change}

            />
            <button className="findButton" onKeyDown={props.search} onClick={props.search}>Wyszukaj</button>
        </div>
    );
}

