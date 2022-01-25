import React from 'react'
import Card from './Card'

const CardSection = () =>{
    return(
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <div className="col-4">
            <Card tittle = "naresh" button="criket"/>
            </div>
            <div className="col-4">
            <Card tittle = "preeti" button="basketball"/>
            </div>
            <div className="col-4">
              <Card tittle = "neeraj" button="football"/>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CardSection;