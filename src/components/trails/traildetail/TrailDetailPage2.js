import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import TrailDetailComments from './TrailDetailComments2';
import TrailDetailCalendar from './TrailDetailCalendar2';
import TrailDetailInfo from './TrailDetailInfo2';


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