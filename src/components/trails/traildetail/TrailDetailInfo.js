import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';
import '../../app/common/floatgrid.css';
import fourpeaks from './fourpeaks.jpg'
export class TrailDetailInfo extends React.Component {

    state = { loggedInUserCreatedTrail: false };

    componentDidMount() {
        if (this.props.trail.user._id === this.props.user) {
            this.setState({ loggedInUserCreatedTrail: true });
        }
    }

    render() {
        //console.log('PROPS', this.props)
        const { trail } = this.props;

        const userCreatedTrail = (
            <React.Fragment>
                <Link to={`/edit/${trail.id}`}><button id="editTrailButton">Edit Trail Info</button></Link>&nbsp;&nbsp;
                <button id="deleteTrailButton" onClick={this.props.onTrailDelete}>Delete Trail</button>
            </React.Fragment>
        );

        const userDidNotCreateTrail = (
            <React.Fragment>
                <a href={`mailto:${trail.user.email}?Subject=Edits%20for%20${trail.trailName}`}><button id="emailCreatorButton">Email Trail Creator Your Suggested Updates</button></a>&nbsp;&nbsp;
            </React.Fragment>
        )

        const imageUrl = trail.trailImage || fourpeaks;

        return (
            <React.Fragment>
                <span className="imgfeature">
                    <img src={imageUrl} alt={trail.trailName || "jeeping on a random trail"} />
                </span>
                <div className="detailpageinfo">
                    <h1>{trail.trailName}</h1>
                    <p id="description">{trail.trailDescription}</p>
                    <hr className="hr" />
                    <h3>LOCATION</h3>
                    <p id="location">{trail.trailLocation}</p>
                    <hr className="hr" />
                    <h3>RATING</h3>
                    <p id="rating">{trail.trailRating}</p>
                    {/*if user created trail give edit/delete buttons, if not have email creator */
                        this.state.loggedInUserCreatedTrail ? userCreatedTrail : userDidNotCreateTrail}
                </div>
            </React.Fragment >
        )
    }
}



const mapStateToProps = (state) => {
    return {
        jwt: state.auth.jwt,
        trail: state.trail.trailDetails,
        user: state.auth.user.id
    }
}


export default withRouter(
    connect(mapStateToProps)(TrailDetailInfo)
);