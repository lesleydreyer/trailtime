import React, { Component } from 'react';
import TrailListItem from './TrailListItem';

class TrailList extends Component {
    render() {
        const { trails, deleteTrail } = this.props;
        console.log('TRAILS:', trails);
        return (
            <div>
                {/*double check trails are there with async stuff since sometimes it takes time before rendering otherwise get map error if tries to render before acync is done*/
                    trails && trails.map((trail) =>
                        <TrailListItem
                            key={trail.id}
                            trail={trail}
                            deleteTrail={deleteTrail}
                        />)}
            </div>
        );
    }
}

export default TrailList;