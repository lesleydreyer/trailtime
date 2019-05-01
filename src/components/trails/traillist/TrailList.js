import React, { Component } from 'react';
import TrailListItem from './TrailListItem';

export class TrailList extends Component {
    render() {
        const { trails, auth } = this.props;//these pass down from traildashboard
        return (
            <div className="gallery">
                {
                    trails && trails.map((trail) =>
                        <TrailListItem
                            key={trail.id}
                            trail={trail}
                            auth={auth}
                        />)}
            </div>
        );
    }
}

export default TrailList;