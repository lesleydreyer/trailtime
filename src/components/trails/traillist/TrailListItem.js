import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fourpeaks from '../traildetail/fourpeaks.jpg'
import './index.css';
import './floatgrid.css';
class TrailListItem extends Component {
    render() {
        const { trail } = this.props;//const { trail, deleteTrail } = this.props;
        const imageUrl = trail.trailImage || fourpeaks;
        const divStyle = {
            WebkitTransition: 'all',
            msTransition: 'all',
            backgroundImage: 'url(' + imageUrl + ')',
        };
        return (
            <div className="col-6">
                <Link to={`/detail/${trail.id}`}>
                    <div className="trailListItem" data-src="" style={divStyle}>
                        <span className="text">
                            <h2>{trail.trailName}</h2>
                            <p className="locationRating">{trail.trailLocation} &nbsp; | &nbsp; {trail.trailRating}</p>
                            <br/><p className="linkInfo">More Info ></p>
                        </span>
                    </div>
                </Link>
                <hr />
            </div>
        );
    }
}

export default TrailListItem;

/*
class TrailListItem extends Component {
    render() {
        const { trail } = this.props;//const { trail, deleteTrail } = this.props;
        const imageUrl = trail.trailImage || fourpeaks;
        return (
            <div className="row">
                <div className="col-6">
                    <img src={imageUrl} className="imageList" alt="trail pic" />
                </div>
                <div className="col=6">
                    <h3>{trail.trailName}</h3>
                    <p>{trail.trailLocation} | {trail.trailRating}</p>
                    <Link to={`/detail/${trail.id}`}>View trail details > </Link>
                </div>
                <hr />
            </div>
        );
    }
}
*/