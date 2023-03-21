import { useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar.js';
import { useEffect } from 'react';

const App = () => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState({
        email: 'akshay@cashwise.in', role: 'owner'
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser({ ...currentUser, [name]: value })
    }

    const addUser = () => {
        let id = users.length
        let newUser = {
            id,
            email: currentUser.email,
            role: currentUser.role
        }
        setCurrentUser({ email: '', role: '' })
        setUsers([...users, newUser])
    }

    useEffect(() => {
        if (currentUser.email !== "" && currentUser.role !== "") {
            addUser()
        }
    }, [currentUser])

    return (
        <div class="flex">
            <Sidebar />
            <Dashboard users={users} handleChange={handleChange} addUser={addUser} />
        </div>
    );
}

export default App;
