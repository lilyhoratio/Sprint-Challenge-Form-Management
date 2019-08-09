import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./UserList.css";
import axios from "axios";

const UserList = props => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="user-cards">
      {users.map(user => {
        return (
          <Card>
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>{user.course || "N/A"}</Card.Meta>
              <Card.Description>
                {user.ingredients.map(ingredient => (
                  <li>{ingredient}</li>
                ))}
              </Card.Description>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
};

export default UserList;
