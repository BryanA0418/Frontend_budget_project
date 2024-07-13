import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../CSS/Show.css"
import { Link } from "react-router-dom";

const API = "https://full-stack-project-ndjs.onrender.com";

export default function Show(){
    const [transaction, setTransaction] = useState({item_name:"", amount:"", date:"", from:"", category:""})
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/transactions/${id}`)
        .then(res => res.json())
        .then(resJSON => setTransaction(resJSON))
        .catch(() =>{
            navigate("*")
        })
    },[id, navigate])

    const handleDelete = () => {
        fetch(`${API}/transactions/${id}`, {
          method: "DELETE"
        })
          .then(() => {
          navigate("/transactions")
          })
        .catch((error) => console.error(error))
      }

return (
    <div className="show_container">
        <section id="show_transaction">
            <h1 className="show_h1">Transaction Details</h1>
            <p>Transaction ID = {transaction.id}</p>
            <p>Name = {transaction.item_name}</p>
            <p>Amount = {transaction.amount}</p>
            <p>Date = {transaction.date}</p>
            <p>From = {transaction.from}</p>
            <p>Category = {transaction.category}</p>
            <div className="button_div"><Link to={`/transactions/${id}/edit`}><button>Edit</button></Link>
            <button onClick={handleDelete}>Delete</button></div>
        </section>
    </div>
)
}