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
    
  )
}
