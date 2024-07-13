import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = "https://full-stack-project-ndjs.onrender.com";

export default function Edit(){

    const [transaction, setTransaction] = useState({item_name:"", amount:"", date:"", from:"", category:""});
    let navigate = useNavigate();
    let { id } = useParams();

    const handleTextChange = (event) => {
        setTransaction({...transaction, [event.target.id]: event.target.value})
      }

      useEffect(() =>{
        fetch(`${API}/transactions/${id}`)
        .then(res => res.json())
        .then(resJSON => setTransaction(resJSON))
        .catch((error) => {
            console.log(error)
        })
      }, [id])

      const updateTransaction = () => {
        fetch(`${API}/transactions/${id}`, {
            method: "PUT",
            body: JSON.stringify(transaction),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(() => {
            navigate(`/transactions/${id}`)
            })
          .catch((error) => console.error(error))
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        updateTransaction();
        setTransaction({item_name:"", amount:"", date:"", from:"", category:""});
      }
    

    return(
        <div class="form_container">  
  <form id="transaction" onSubmit={handleSubmit}>
    <h3>Edit an Transaction</h3>
    <fieldset>
      <input placeholder="Date" type="date" tabIndex="1" id="date" autofocus value={setTransaction.date} onChange={handleTextChange}/>
    </fieldset>
    <fieldset>
      <input placeholder="Item Name" type="text" tabIndex="2" id="item_name" value={setTransaction.item_name} onChange={handleTextChange}/>
    </fieldset>
    <fieldset>
      <input placeholder="Amount" type="text" tabIndex="3" id="amount" value={setTransaction.amount} onChange={handleTextChange}/>
    </fieldset>
    <fieldset>
      <input placeholder="Catergory" type="Text" tabIndex="4" id="category" value={setTransaction.category} onChange={handleTextChange}/>
    </fieldset>
    <fieldset>
    <input placeholder="Where you bought from?" type="Text" tabIndex="5" id="from" value={setTransaction.from} onChange={handleTextChange}/>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit">Edit Item</button>
    </fieldset>
  </form>
</div>
    )
}