import React from "react";
import Form from "./components/Form.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
