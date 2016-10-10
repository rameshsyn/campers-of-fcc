import React, { Component } from 'react'
import Content from './Content'

class Home extends Component {
  render(){
    return (
      <div className="home-page container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-10 col-md-offset-1">
          <h1>Home Page</h1>
          <Content
            maxCount={ 5 }
            perPage={ 5 } />
        </div>
      </div>
      </div>
    )
  }
}

export default Home