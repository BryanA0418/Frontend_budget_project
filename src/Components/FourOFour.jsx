import { Link } from "react-router-dom"
import "../CSS/FourOFour.css"

export default function FourOFour(){
    return (
        <div className="fourofour_container">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p className="p_exist">
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <a href="https://www.google.co.in/" target="blank">
          <Link to="/transactions"><button>Back to home <i className="far fa-hand-point-right"></i></button></Link>
        </a>
      </div>
    </div>
    )
}