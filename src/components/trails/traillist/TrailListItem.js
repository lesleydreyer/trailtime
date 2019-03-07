import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fourpeaks from '../traildetail/fourpeaks.jpg'
import './index.css';
class TrailListItem extends Component {
    render() {
        const { trail } = this.props;//const { trail, deleteTrail } = this.props;
        return (
            <React.Fragment>
                <img src={fourpeaks} className="width20" alt="trail pic" />
                <h3>{trail.trailName}</h3>
                <p>{trail.trailLocation} | {trail.trailRating}</p>
                <Link to={`/detail/${trail.id}`}>View trail details > </Link>
                <hr />
            </React.Fragment>
        );
    }
}

export default TrailListItem;