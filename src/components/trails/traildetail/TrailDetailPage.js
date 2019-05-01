import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import TrailDetailInfo from './TrailDetailInfo';
import { getTrail, deleteTrail } from '../trailActions';

export class TrailDetailPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(
            getTrail({
                jwt: this.props.auth.jwt,
                trailId: this.props.match.params.id
            })
        );
    }

    onTrailDelete = () => {
        this.props.dispatch(
            deleteTrail({
                jwt: this.props.auth.jwt,
                trailId: this.props.trail.id
            })
        ).then(() => {
            alert('Trail deleted.');
            this.props.history.push('/trails');
        });
    }

    render() {
        const { trail, auth } = this.props;
        if (!trail) {
            return <p>Loading...</p>;
        }

        return (
            <TrailDetailInfo trail={trail} auth={auth} onTrailDelete={this.onTrailDelete} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        trail: state.trail.trailDetails
    }
}

export default connect(mapStateToProps)(TrailDetailPage);