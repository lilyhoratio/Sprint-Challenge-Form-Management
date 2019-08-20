import React from "react";
import Form from "./components/Form.js";
import UserList from "./components/UserList";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  // const [users, setUsers] = useState([]);

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => {
        // console.log(res.data);
        this.setState({ users: res.data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <Form />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
