import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const fetchGithubUsers = async () => {
        try {
            const res = await fetch('https://api.github.com/users')
            if (res.ok) {
                const data = await res.json()
                setUsers(data)
            } else {
                throw new Error(res.statusText)
            }
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchGithubUsers()
    }, [])


    return (
        <div>
            <ul>
                {users && users.map((user, index) => <li key={index} ><Link to={`/users/${user.login}`} >{user.login}</Link></li>)}
            </ul>
            {error && <div>{error.message}</div>}
            <hr />
            <Outlet />
        </div>
    )
}