import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import fourpeaks from '../traildetail/fourpeaks.jpg';
import { deleteTrail } from '../trailActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import TrailImages from './TrailImages';
//import TrailImages from '../traildetail/TrailImages';
//import Gallery from '../traildetail/AliceCarousel'
//{/*src={trail.images[0]}*/}<img src={fourpeaks} />

class TrailDetailInfo extends React.Component {
    deleteTrail = trailId => {
        this.props.dispatch(
            deleteTrail({
                jwt: this.props.jwt,
                trailId
            }))
            .then(() => {
                alert('Trail deleted.');
                this.props.history.push('/trails');
            });
    }


    render() {
        const { trail } = this.props;
        return (
            <React.Fragment>
                <div>
                    <img className="heroPic" src={fourpeaks} alt='trailpic' />
                </div>
                <img className="width20" src={fourpeaks} alt='trailpic' />
                <img className="width20" src={fourpeaks} alt='trailpic' />
                <img className="width20" src={fourpeaks} alt='trailpic' />
                <h2>{trail.trailName}</h2>
                <p>{trail.trailDescription}</p>
                <p>{trail.trailLocation}</p>
                <p>{trail.trailRating}</p>
                <Link to={`/edit/${trail.id}`}><button>EDIT TRAIL INFO</button></Link>&nbsp;&nbsp;
                <Link to={`/images/${trail.id}`}><button>UPLOAD PICTURES</button></Link>&nbsp;&nbsp;
            <button onClick={() => this.deleteTrail(trail.id)}>DELETE TRAIL</button>
            </React.Fragment >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        jwt: state.auth.jwt,
        trail: state.trail.trailDetails
    }
}

export default withRouter(
    connect(mapStateToProps)(TrailDetailInfo)
);