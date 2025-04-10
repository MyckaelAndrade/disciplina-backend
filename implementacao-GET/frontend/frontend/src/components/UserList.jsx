// frontend/src/components/UserList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:53653/users')
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Usuários Cadastrados</h2>
            <div className='box'>
                {users.map(user => (
                    <div className='container' key={user._id}>
                        <h2>{user.name}</h2>
                        <p><strong>Idade:</strong> {user.idade}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Telefone:</strong> {user.phone}</p>
                        <p><strong>Endereço:</strong> {user.address}</p>
                        <p><strong>Estado:</strong> {user.state}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserList;
