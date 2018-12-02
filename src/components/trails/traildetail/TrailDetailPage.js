import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import TrailDetailComments from './TrailDetailComments';
import TrailDetailCalendar from './TrailDetailCalendar';
import TrailDetailInfo from './TrailDetailInfo';
import { getTrail } from '../trailActions';

class TrailDetailPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(
            getTrail({
                jwt: this.props.jwt,
                trailId: this.props.match.params.id
            })
        ).then(() => {
            //alert('Fetched Succesfully!');
        });
    }

    render() {
        const { trail } = this.props;
        if (!trail) {
            return <p>Loading ...</p>;
        }

        return (
            <main role="main">
                <h1>Hello world!</h1>
                <TrailDetailInfo trail={trail} />
                <br />
                <hr />
                <TrailDetailCalendar />
                <br />
                <hr />
                <TrailDetailComments />
                <br />
                <br />
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