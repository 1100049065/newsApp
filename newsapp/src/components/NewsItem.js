import React, { Component } from 'react'

export default class NewsItem extends Component {
    
     render() {


        let {title, description, imageURL, newsURL, author, date } = this.props
                return (
                   
               //  <div className="my-3">
               //   <div className="card" style={{width: "18rem"}}>
               //   <img className="card-img-top" 
               //   src= { !imageURL?"https://bilder2.n-tv.de/img/incoming/crop23116797/0261325018-cImg_16_9-w1200/270058144.jpg":imageURL }  alt="Card image cap"/>
               //      <div className="card-body">
               //          <h5 className="card-title">{ title }...</h5>
               //          <p className="card-text">{ description }...</p>
               //          <p className="card-text"><small className="text-muted">By { !author?"Anonymous" : author } on { new Date(date).toGMTString() } </small></p>
               //          <a href={newsURL} target="_blank"className="btn btn-sm btn-dark">Go somewhere</a>
               //      </div>
               //   </div>


                 <div className ="container">
                 <div className="row">
                   <div className="col-sm">
                  
                   </div>
                  <div className="my-3">
                 <div className="card" style={{width: "18rem"}}>
                
                 <img className="card-img-top" 
                 src= { !imageURL?"https://bilder2.n-tv.de/img/incoming/crop23116797/0261325018-cImg_16_9-w1200/270058144.jpg":imageURL }  alt="Card image cap"/>
                    
                 <div className="card-body">
                        <h5 className="card-title">{ title }...</h5>
                        <p className="card-text">{ description }...</p>
                        <p className="card-text"><small className="text-muted">By { !author?"Anonymous" : author } on { new Date(date).toGMTString() } </small></p>
                        <a href={newsURL} target="_blank"className="btn btn-sm btn-dark">Go somewhere</a>
                 </div>
                 
                 </div>
              
                 </div>
               </div>
               </div>
                
    
    )
  }
}
