import React, { Component } from 'react';
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router'
import * as actions from '../actions/story-actions'
 /*
  * Component
  */
class MyStoryPage extends Component {
  componentWillMount(){
    // get my submitted stories
    this.props.getMyStories()
  }
  render () {
    let { submitted } = this.props;
    let childElemenets = [];
    if (submitted.length === 0) {
      childElemenets.push(
        <h2 key={'title'}>Why not write a story?</h2>
      )
    } else {
       childElemenets = submitted.map((x,i) => {
        return (
          <div className="row" key={i}>
            <div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-4 col-md-offset-4 outer">
              <div className="card">
                <h3>{x.title}</h3>
                <h4>Status: {x.status}</h4>
                <Link to={`/edit/${x._id}`} className="btn btn-primary edit">
                  Edit
                </Link>
              </div>
            </div>
          </div>
        )
      })
    }
    return (
      <div className="container-fluid" id="my-stories">
        <div className="col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
            {childElemenets}
        </div>
      </div>
    );
  }
}

/*
 * Redux
 */
const mapStateToProps = (state) => {
  return {
    submitted: state.content.submitted
  }
}

export default connect(mapStateToProps, actions)(MyStoryPage)
