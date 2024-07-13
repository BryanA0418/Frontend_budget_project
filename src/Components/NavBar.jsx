import "../CSS/NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <div className="topBar">
            <Link to = "/transactions"><h1>Budget App</h1></Link>
            <Link to = "/transactions/new"><button className="new-button">New Transaction</button></Link>
        </div>
    )
}