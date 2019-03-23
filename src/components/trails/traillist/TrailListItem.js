import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fourpeaks from '../traildetail/fourpeaks.jpg'
import './index.css';
import '../../app/common/floatgrid.css';
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
                            <span className="trailName">
                                {trail.trailName}
                            </span><br />
                            <span className="locationRating">
                                {trail.trailLocation} <br />
                                {trail.trailRating}
                            </span><br />
                            <span className="linkInfo">
                                More Info >
                            </span>
                        </span>
                    </div>
                </Link>
                <hr />
            </div>
        );
    }
}

export default TrailListItem;