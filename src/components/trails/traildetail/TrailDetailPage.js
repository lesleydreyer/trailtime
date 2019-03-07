import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import TrailDetailComments from './comments/TrailDetailComments';
import TrailCalendar from './TrailCalendar';
import TrailDetailInfo from './TrailDetailInfo';
import { getTrail, deleteTrail } from '../trailActions';
import TrailMap from './TrailMap';
class TrailDetailPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(
            getTrail({
                jwt: this.props.jwt,
                trailId: this.props.match.params.id
            })
        ).then(() => {
            //TODO: //not sure if i need anything here
            //alert('Fetched Succesfully!');
        });
    }

    onTrailDelete = () => {
        this.props.dispatch(
            deleteTrail({
                jwt: this.props.jwt,
                trailId: this.props.trail.id
            })
        ).then(() => {
            alert('Trail deleted.');
            this.props.history.push('/trails');
        });
    }

    render() {
        const { trail } = this.props;
        if (!trail) {
            return <p>Loading ...</p>;
        }

        return (
            <main role="main">
                <h1>{trail.trailName}</h1>
                <TrailDetailInfo trail={trail} onTrailDelete={this.onTrailDelete} />
                <br />
                <hr />
                <TrailCalendar />
                <br />
                <hr />
                <TrailDetailComments trail={trail} />
                <br />
                <hr />
                <TrailMap trail={trail} />

            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        jwt: state.auth.jwt,
        trail: state.trail.trailDetails,
        username: state.auth.user.username
    }
}

export default connect(mapStateToProps)(TrailDetailPage);