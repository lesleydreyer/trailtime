import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import fourpeaks from '../traildetail/fourpeaks.jpg'
import './traillist.css';
import '../../app/common/floatgrid.css';

library.add(faPencilAlt);

export class TrailListItem extends Component {
    state = { loggedInUserCreatedTrail: false };
    componentDidMount() {
        if (this.props.trail.user._id === this.props.auth.user.id) {
            this.setState({ loggedInUserCreatedTrail: true });
        }
    }

    editWithPencilIcon = () => {
        console.log('clicked editWithPencilIcon')
    }

    render() {
        const { trail } = this.props;//const { trail, deleteTrail } = this.props;
        const imageUrl = trail.trailImage || fourpeaks;
        const divStyle = {
            WebkitTransition: 'all',
            msTransition: 'all',
            backgroundImage: 'url(' + (imageUrl) + ')',
        };
        return (
            <div className="col-6">
                <div className="trailListItem" data-src="" style={divStyle}>
                    <div>
                        {//if user created trail, give option to edit from here
                            this.state.loggedInUserCreatedTrail
                                ? <Link to={`/edit/${trail.id}`}>
                                    <FontAwesomeIcon icon={faPencilAlt} size="1x" className="fas" title="Edit Trail" />
                                </Link>
                                : <div></div>
                        }
                    </div>
                    <span className="text">
                        <span className="trailName">
                            {trail.trailName}
                        </span><br />
                        <span className="locationRating">
                            {trail.trailLocation} <br />
                            {trail.trailRating}
                        </span><br />
                        <Link to={`/detail/${trail.id}`}>
                            <span className="linkInfo">
                                More Info >
                            </span>
                        </Link>
                    </span>
                </div>
            </div>
        );
    }
}


export default TrailListItem;