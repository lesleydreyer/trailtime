import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import TrailDetailInfo from './TrailDetailInfo';
import { getTrail, deleteTrail } from '../trailActions';
class TrailDetailPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(
            getTrail({
                jwt: this.props.jwt,
                trailId: this.props.match.params.id
            })
        )
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
        const { trail, username } = this.props;
        if (!trail) {
            return <p>Loading ...</p>;
        }

        return (
            <main role="main">
                <h1>{trail.trailName}</h1>
                <TrailDetailInfo trail={trail} user={username} onTrailDelete={this.onTrailDelete} />
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        jwt: state.auth.jwt,
        trail: state.trail.trailDetails
    }
}

export default connect(mapStateToProps)(TrailDetailPage);