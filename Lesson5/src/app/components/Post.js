import React from 'react';
import {Link} from 'react-router';

export default class Post extends React.Component {
  render()
  {
    return(
      <div className="card border-secondary mb-3">
        <div className="card-header">
        <h4>
          <Link to={`/posts/${this.props.id}`}>
          {this.props.title}
          </Link>
        </h4>
        </div>
        <div className="card-body text-secondary">
          <p>{this.props.body}</p>          
        </div>
        
      </div>
      
    );
  }
}