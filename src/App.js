import React, {useEffect, useState} from "react";
import './App.css';

function App () {
    const [user, setUser] = useState([]);


    useEffect(() => {
        fetch("https://reqres.in/api/users?page=2").then((result) =>{
        result.json().then((resp) =>{
                setUser(resp.data);
                console.log(user);
        });
    });
    },[]);
    return(
        <>
        <h1>User Information</h1>
            <div className="App">

                <table id="user">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Picture</th>
                    </tr>
                    {
                        user.map((item) =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.first_name} {item.last_name}</td>
                            <td>{item.email}</td>
                            <td><img src={item.avatar} alt="" /></td>
                        </tr>
                        )
                    }

                </table>
            </div>
        </>
    )
}

export default App;