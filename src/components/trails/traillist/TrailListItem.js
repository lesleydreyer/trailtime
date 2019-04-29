import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import fourpeaks from '../traildetail/fourpeaks.jpg'
import './index.css';
import '../../app/common/floatgrid.css';

library.add(faPencilAlt);

export class TrailListItem extends Component {
    state = { loggedInUserCreatedTrail: false };
    componentDidMount() {
        if (this.props.trail.user._id === this.props.user) {
            console.log('creator', this.props.trail.trailName)
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
                <Link to={`/detail/${trail.id}`}>
                    <div className="trailListItem" data-src="" style={divStyle}>
                        <div>
                            {//if user created trail, give option to edit from here
                                this.state.loggedInUserCreatedTrail
                                    ? <Link to={`/edit/${trail.id}`}>
                                        <FontAwesomeIcon icon={faPencilAlt} size="15px" className="fas" title="Edit Trail" />
                                        {/*<i
                                            className="fas fa-pencil-alt fa-lg"
                                            title="edit trail"
                                        onClick={() => { this.editWithPencilIcon() }} />*/}
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
                            <span className="linkInfo">
                                More Info >
                            </span>
                        </span>
                    </div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user.id
    }
}

export default connect(mapStateToProps, null)(TrailListItem);