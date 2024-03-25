import { Link, Route, Routes } from "react-router-dom"
import { ShowGithubUser } from "./ShowGithubUser"
import { Counter } from "./Counter"
import { Welcome } from "./Welcome"
export function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <div>
                        <ul>
                            <li><Link to='/welcome'>Welcome Component</Link></li>
                            <li><Link to='/counter'>Counter Component</Link></li>
                            <li><Link to='/users/'>GithubUser Component</Link></li>
                        </ul>
                    </div>
                } />
                <Route path='/counter' element={<Counter />} />
                <Route path='/welcome' element={<Welcome name='Mario' />} />
                <Route path="/users/:username" element={<ShowGithubUser />} />
            </Routes>
        </div >
    )
}