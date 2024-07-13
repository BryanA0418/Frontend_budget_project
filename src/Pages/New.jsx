import "../CSS/New.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function(){
    const API = "https://full-stack-project-ndjs.onrender.com";

    const [newTransaction, setNewTransaction] = useState({item_name:"", amount:"", date:"", from:"", category:""});

    const handletextChange = (event) => {
        setNewTransaction({...newTransaction, [event.target.id]: event.target.value})
    }

    let navigate = useNavigate();

    const addTransaction = () => {
        fetch(`${API}/transactions/`, {
            method:"POST",
            body: JSON.stringify(newTransaction),
            headers: {
                "Content-Type" : "application/json"
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        addTransaction();
        setNewTransaction({item_name:"", amount:"", date:"", from:"", category:""})
        navigate("/transactions")
    }

    return (
        <div className="form_container">  
  <form id="transaction" onSubmit={handleSubmit}>
    <h3>Add an Transaction</h3>
    <fieldset>
      <input placeholder="Date" type="date" tabIndex="1" id="date" required autoFocus value={newTransaction.date} onChange={handletextChange}/>
    </fieldset>
    <fieldset>
      <input placeholder="Item Name" type="text" tabIndex="2" id="item_name" required value={newTransaction.item_name} onChange={handletextChange}/>
    </fieldset>
    <fieldset>
      <input placeholder="Amount(please enter '-' If deducting from account.)" type="text" tabIndex="3" id="amount" required value={newTransaction.amount} onChange={handletextChange}/>
    </fieldset>
    <fieldset>
      <input placeholder="Catergory" type="Text" tabIndex="4" id="category" required value={newTransaction.category} onChange={handletextChange}/>
    </fieldset>
    <fieldset>
    <input placeholder="Where you bought from?" type="Text" tabIndex="5" id="from"required value={newTransaction.from} onChange={handletextChange}/>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit">Create New Item</button>
    </fieldset>
  </form>
</div>
    )
}