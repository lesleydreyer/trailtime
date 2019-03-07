import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPhotos } from '../photoActions';
import SlideshowGallery from './slideshow/SlideshowGallery';
import './index.css';

class TrailDetailInfo extends React.Component {

    state = { loggedInUserCreatedTrail: false };

    componentDidMount() {//for editing purposes - only allow if user created trail, otherwise email creator changes instead
        if (this.props.trail.user._id === this.props.user) {
            this.setState({ loggedInUserCreatedTrail: true });
        }

        //TODO - hook up once figure out how to do cloudinary/backend
        this.props.getPhotos({
            jwt: this.props.jwt,
            trailId: '3'
        })
    }

    render() {
        const { trail, photos } = this.props;

        const userCreatedTrail = (
            <React.Fragment>
                <Link to={`/edit/${trail.id}`}><button>EDIT TRAIL INFO</button></Link>&nbsp;&nbsp;
                <Link to={`/images2/${trail.id}`}><button>UPLOAD PICTURES ALT</button></Link>&nbsp;&nbsp;
                <Link to={`/images/${trail.id}`}><button>UPLOAD PICTURES</button></Link>&nbsp;&nbsp;
                <button onClick={this.props.onTrailDelete}>DELETE TRAIL</button>
            </React.Fragment>
        );

        const userDidNotCreateTrail = (
            <React.Fragment>
                <a href={`mailto:${trail.user.email}?Subject=Edits%20for%20${trail.trailName}`}><button>EMAIL TRAIL CREATOR ANY UPDATES</button></a>&nbsp;&nbsp;
                <Link to={`/images/${trail.id}`}><button>UPLOAD PICTURES</button></Link>&nbsp;&nbsp;
            </React.Fragment>
        )

        return (
            <React.Fragment>
                <p>{trail.trailDescription}</p>
                <p>{trail.trailLocation}</p>
                <p>{trail.trailRating}</p>
                {/*if user created trail give edit/delete buttons, if not have email creator */
                    this.state.loggedInUserCreatedTrail ? userCreatedTrail : userDidNotCreateTrail}
                <hr />
                <SlideshowGallery photos={photos} />
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

const mapDispatchToProps = {
    getPhotos
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TrailDetailInfo)
);