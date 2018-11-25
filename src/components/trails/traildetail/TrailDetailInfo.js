import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import fourpeaks from '../traildetail/fourpeaks.jpg';
//import TrailImages from './TrailImages';
//import TrailImages from '../traildetail/TrailImages';
//import Gallery from '../traildetail/AliceCarousel'
//{/*src={trail.images[0]}*/}<img src={fourpeaks} />

class TrailDetailInfo extends React.Component {
    onTrailClick(value) {
        console.log(value)
    }

    render() {
        const { trail } = this.props;//{ trail, deleteTrail }
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
                <Link to={`/edit/${trail.id}`}><button>EDIT TRAIL INFO</button></Link>&nbsp;&nbsp;
                <Link to={`/images/${trail.id}`}><button>UPLOAD PICTURES</button></Link>&nbsp;&nbsp;
            <button>DELETE TRAIL</button>
            </React.Fragment >
        )
    }
}//onClick={deleteTrail(trail.id)}
//<button onClick={() => this.onTrailClick(trail.id)}>UPLOAD PICS</button>&nbsp;&nbsp;

export default TrailDetailInfo;