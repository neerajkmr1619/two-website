import React from "react"

const Card = ({tittle="Football",button="Click me"}) =>{
    return(
        <div className="card" style={{width: "18rem"}}>
        <img
          src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{tittle}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <a href="#" className="btn btn-success">{button}</a>
        </div>
      </div>
    );
}

export default Card;