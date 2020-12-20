import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = { text: "@Click Me!" };

  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
      {/* to access the named object inside the JavaScript variable, we need the .name */}
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)