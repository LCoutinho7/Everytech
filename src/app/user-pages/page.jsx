"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserPages() {

    const [users, setUsers] = useState([]);

        useEffect(() => {
            fetch("http://localhost:3000/api/git-users")
            .then((response)=> response.json())
            .then((response)=> setUsers(response))
            .catch(errors=> console.error(errors));

        }, [])
        
        console.log(users);

  return (
    <div>
        <h1>User Pages</h1>
        
        <div>
            <ul className="card-user">
                {
                    users.map((user)=>(
                        <li key={user.id}>
                            <figure>
                                <Image
                                src={user.avatar_url}
                                alt="Avatar"
                                width={50}
                                height={50} />
                                <figcaption>{user.login}</figcaption>
                            </figure>
                        </li>
                    ))
                }
            </ul>
        </div>

    </div>
  )
}
