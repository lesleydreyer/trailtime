import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import fourpeaks from '../traildetail/fourpeaks.jpg'
//import TrailImages from './TrailImages';
//import TrailImages from '../traildetail/TrailImages';
//import Gallery from '../traildetail/AliceCarousel'
//{/*src={trail.images[0]}*/}<img src={fourpeaks} />

class TrailDetailInfo extends React.Component {
    onTrailClick(value) {
        console.log(value)
    }

    render() {
        const { trail, deleteTrail } = this.props;
        return (
            <React.Fragment>
                <div><img className="heroPic" src={fourpeaks} /></div>
                <img className="width20" src={fourpeaks} /><img className="width20" src={fourpeaks} /><img className="width20" src={fourpeaks} />
                <h2>{trail.trailName}</h2>
                <p>{trail.trailDescription}
                </p>
                <Link to={`/edit/${trail.id}`}><button>EDIT TRAIL INFO</button></Link>&nbsp;&nbsp;
            <button onClick={() => this.onTrailClick(trail.id)}>UPLOAD PICS</button>&nbsp;&nbsp;
            <button>DELETE TRAIL</button>
            </React.Fragment >
        );
    }
}//onClick={deleteTrail(trail.id)}

export default TrailDetailInfo;