import React from 'react';
import AliceCarousel from 'react-alice-carousel';

const Carousel = () => (
    <React.Fragment>
        <h2>Alice</h2>
        <AliceCarousel>
            <img src="./hurricaneridgel.jpg" alt="pic" className="yours-custom-class" />
            <img src="./hurricaneridgel.jpg" alt="pic" className="yours-custom-class" />
            <img src="./hurricaneridgel.jpg" alt="pic" className="yours-custom-class" />
            <img src="./hurricaneridgel.jpg" alt="pic" className="yours-custom-class" />
            <img src="./hurricaneridgel.jpg" alt="pic" className="yours-custom-class" />
        </AliceCarousel>
    </React.Fragment>
)

export default Carousel;

//////////////////////////////
/*import React from 'react'
import AliceCarousel from './react-alice-carousel'

class Carousel extends React.PureComponent {
    responsive = {
        0: { items: 1 },
        600: { items: 2 },
        960: { items: 3 }
    }

    stagePadding = {
        paddingLeft: 50,
        paddingRight: 50,
    }

    render() {
        return (
            <div className="app" id="app">
                <h1 className="h1">React Alice Carousel</h1>
                <AliceCarousel
                    duration={400}
                    showSlideInfo={true}
                    fadeOutAnimation={true}
                    mouseDragEnabled={true}
                    responsive={this.responsive}
                    stagePadding={this.stagePadding}
                    onSlideChanged={(e) => console.debug(e)}
                    onResized={(e) => this.setState(e)}
                    onInitialized={(e) => this.setState(e)}
                >
                    <div className="item"><h1>1</h1></div>
                    <div className="item"><h1>2</h1></div>
                    <div className="item"><h1>sss</h1></div>
                    <div className="item"><h1>4</h1></div>
                    <div className="item"><h1>5</h1></div>
                    <img className="item" src="./hurricaneridgel.jpg" alt="image" />

                </AliceCarousel>
            </div>
        )
    }
}

export default Carousel
*/