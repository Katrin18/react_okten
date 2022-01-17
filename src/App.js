import logo from './logo.svg';
import './App.css';

import Form from "./components/form/Form";
import Users from "./components/users/Users";
import {useState} from "react";
import {useEffect} from "react";
import {userService} from "./services/user.service";

function App() {

    const [users, setUsers] = useState([]);
    const [filterUsers, setFilterUsers] = useState([]);

    useEffect(() => {
        userService.getUsers().then(value => {
            setUsers([...value]),
                setFilterUsers([...value])
        })
    }, [])

    const getFilter = (elem) => {

        let array = [...users]

        if (elem.name) {
            array = array.filter(user => user.name.toLowerCase().includes(elem.name.toLowerCase()))
        }
        if (elem.username) {
            array = array.filter(user => user.username.toLowerCase().includes(elem.username.toLowerCase()))
        }
        if (elem.email) {
            array = array.filter(user => user.email.toLowerCase().includes(elem.email.toLowerCase()))
        }
        setFilterUsers(array)
    }

    return (
        <div className="App">
            <Form getFilter={getFilter}/>
            <Users users={filterUsers}/>
        </div>
    );
}

export default App;
