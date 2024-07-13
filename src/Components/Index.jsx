import { useState, useEffect } from "react"
import "../CSS/Index.css"
import { Link } from "react-router-dom"

const API = "https://full-stack-project-ndjs.onrender.com"

export default function Index(){
    const [transactions, setTransactions] = useState([]);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }

    const fixedDate = (date) => {
        date.toLocaleDateString("en-us", options)
    }

    const dateForm = new Intl.DateTimeFormat("en-us",{
        dateStyle: "full"
    })
    useEffect(() =>{
        fetch(`${API}/transactions`)
        .then((res) =>{
            return res.json()
        }).then((res) => {
            console.log(res)
            setTransactions(res)
        })
        .catch((error) => console.log(error))
    },[])

    function currentBalance(transactions){
        let balance = 0
        transactions.forEach( ele => {
            if(ele.amount[0] === "-"){
                // let str = ele.amount.substring(1)
                balance -= ele.amount.substring(1)
            }else{
            balance += +ele.amount
            }
        })
        return `${Math.round(balance)}$`;
    }

    return (
        <div className="list">
            <h2 className="h1_for_index">Balance:{currentBalance(transactions)}</h2>
            <ul>
                {transactions.map(transaction =>{let arrDate = new Date(transaction.date); return <Link to = {`/transactions/${transaction.id}`}><li className="indexli"><div className="indexli_date_name"><div className="transdate">{fixedDate(arrDate)}</div> <div>{transaction.item_name}</div></div> <div>{transaction.amount}</div></li></Link>})}
            </ul>
        </div>
    )
}