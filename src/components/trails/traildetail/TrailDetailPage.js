import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import TrailDetailComments from './TrailDetailComments';
import TrailDetailCalendar from './TrailDetailCalendar';
import TrailDetailInfo from './TrailDetailInfo';


const mapStateToProps = (state) => {
    return {
        trail: state.trail.details
    }
}


const TrailDetailPage = ({ trail }) => {
    // onFormSubmit = values => {
    //    console.log('comments submitted');
    //};
    //            <TrailDetailComments onSubmit={this.onFormSubmit}/>

    return (
        <main role="main">
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

export default connect(mapStateToProps)(TrailDetailPage);