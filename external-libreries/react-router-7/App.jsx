import { Link, Route, Routes } from "react-router-dom"
import { ShowGithubUser } from "./ShowGithubUser"
import { GithubUserList } from "./GithubUserList"
export function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <div>
                        <ul>
                            <li><Link to='/users/'>GithubUserList Component</Link></li>
                        </ul>
                    </div>
                } />
                <Route path="/users/" element={<GithubUserList />} >
                    <Route index element={<div><p>Add a user and select it</p></div>} />
                    <Route path=":username" element={<ShowGithubUser />} />
                </Route>
                <Route path="*" element={<div><p>Not found</p><Link to='/'>Home</Link></div>} />
            </Routes>
        </div >
    )
}