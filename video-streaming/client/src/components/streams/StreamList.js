/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchAllStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreams();
  }

  renderAdminButtons = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>Delete</Link>
        </div>
      );
    }
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          {this.renderAdminButtons(stream)}
          <i className='large middle aligned icon camera' />
          <div className='content'>
            <Link className='header' to={`/streams/${stream.id}`}>
            {stream.title}
            </Link>
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      );
    })
  }

  renderCreateButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to='/streams/create' className='ui button primary'>
            Create Stream</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>{this.renderList()}</div>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ streams: Object.values(state.streams), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn });

export default connect(mapStateToProps, { fetchAllStreams })(StreamList);