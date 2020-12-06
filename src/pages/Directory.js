import API from "../utils/API";
import { useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import UserCard from "../components/UserCard";

function Directory() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.getUsers(20).then((res) => {
      console.log(res.data.results);
      setUsers(res.data.results);
    });
  }, []);

  return (
    <UserContext.Provider value={users}>
      <Header title="Employee Directory!" icon="fa fa-address-book-o"></Header>
      <Container fluid={true}>
        <Row>
          <Col size="md-5">
            {users.map((user) => {
              return (
                <UserCard
                  key={user.email}
                  name={`${user.name.first} ${user.name.last}`}
                  email={user.email}
                  phone={user.phone}
                  picture={user.picture.large}
                  gender={user.gender}
                  location={user.location}
                  age={user.dob.age}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </UserContext.Provider>
  );
}

export default Directory;
