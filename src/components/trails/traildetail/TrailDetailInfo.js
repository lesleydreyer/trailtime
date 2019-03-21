import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './index.css';
import '../traillist/floatgrid.css';
import fourpeaks from './fourpeaks.jpg'
class TrailDetailInfo extends React.Component {

    state = { loggedInUserCreatedTrail: false };

    componentDidMount() {
        if (this.props.trail.user._id === this.props.user) {
            this.setState({ loggedInUserCreatedTrail: true });
        }
    }

    render() {
        const { trail } = this.props;

        const userCreatedTrail = (
            <React.Fragment>
                <Link to={`/edit/${trail.id}`}><button>EDIT TRAIL INFO</button></Link>&nbsp;&nbsp;
                <button onClick={this.props.onTrailDelete}>DELETE TRAIL</button>
            </React.Fragment>
        );

        const userDidNotCreateTrail = (
            <React.Fragment>
                <a href={`mailto:${trail.user.email}?Subject=Edits%20for%20${trail.trailName}`}><button>EMAIL TRAIL CREATOR ANY UPDATES</button></a>&nbsp;&nbsp;
            </React.Fragment>
        )

        const imageUrl = trail.trailImage || fourpeaks;

        return (
            <React.Fragment>
                <span className="img">
                    <img src={imageUrl} alt={trail.trailName || "jeeping on a random trail"} />
                </span>
                <span className="detailpageinfo">
                    <h1>{trail.trailName}</h1>
                    <p>{trail.trailDescription}</p>
                    <hr className="hr" />
                    <h3>LOCATION</h3>
                    <p>{trail.trailLocation}</p>
                    <hr className="hr" />
                    <h3>RATING</h3>
                    <p>{trail.trailRating}</p>
                    {/*if user created trail give edit/delete buttons, if not have email creator */
                        this.state.loggedInUserCreatedTrail ? userCreatedTrail : userDidNotCreateTrail}
                </span>
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