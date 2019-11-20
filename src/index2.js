// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

import React from 'react';
import ReactDOM from 'react-dom'

function Portfolio() {
    return (
        <div> Here is the current portfolio
            <h1>View Properties Below </h1>

            {/* <button onClick = 'CurrentProperties()'>
  Current Properties </button> */}

            {/* <button onClick={activateLasers}>
  Activate Lasers
</button> */}

            <ButtonToolbar>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </ButtonToolbar>
        </div>
    )
}
ReactDOM.render (<Portfolio/>, document.querySelector('#root'));
