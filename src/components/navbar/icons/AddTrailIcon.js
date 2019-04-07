import React from "react";

const styles = {
	width: "50px",
	height: "auto",
	overflow: 'hidden',
	resize: 'horizontal'
};


const AddTrailIconSVG = ({
	alt='add a trail',
    style = {styles},
    //width = '127.667px',//'50%'
    className = 'navicons',
	//height = '134px',//'200%'
	preserveAspectRasion="xMidYMid meet",
	viewBox = '0 0 127.667 134'//0 0 32 32',//            
	//width={width} height={height} viewBox={viewBox} className={`${className || ""}`} enable-background="new 0 0 127.667 134">

}) => (
<svg version="1.1" id="Layer_1" x="0px" y="0px" aria-labelledby="addTrailIcon" 
preserveAspectRatio={preserveAspectRasion} style={styles} viewBox={viewBox} role="img">
			<title id="addTrailIcon">Link to Add a Trail</title>
<g>
	<defs>
		<circle id="SVGID_1_" cx="66.761" cy="73.112" r="56.49"/>
	</defs>
	<clipPath id="SVGID_2_">
		<use overflow="visible"/>
	</clipPath>
	<g clip-path="url(#SVGID_2_)">
		<path d="M99.69,52.759c-3.633,36.028-63.196,28.894-67.554,69.403c10.894,2.383,20.025,8.073,31.191,7.447
			c14.817-0.824-6.081-20.876,10.348-36.947c16.612-16.252,31.099-24.142,30.815-40.647"/>
	</g>
</g>
<path d="M66.762,134c-33.574,0-60.888-27.314-60.888-60.888c0-33.572,27.314-60.884,60.888-60.884
	c33.573,0,60.887,27.312,60.887,60.884C127.649,106.686,100.335,134,66.762,134z M66.762,21.022
	c-28.724,0-52.093,23.367-52.093,52.09c0,28.724,23.369,52.093,52.093,52.093c28.725,0,52.093-23.369,52.093-52.093
	C118.855,44.39,95.487,21.022,66.762,21.022z"/>
<path fill="#010101" d="M73.264,32.097H51.399V10.234c0-5.371-4.509-9.768-9.885-9.768c-5.372,0-9.881,4.397-9.881,9.768v21.863
	H9.769C4.397,32.097,0,36.607,0,41.982c0,5.373,4.397,9.886,9.769,9.886h21.864v21.858c0,5.375,4.509,9.773,9.881,9.773
	c5.376,0,9.885-4.398,9.885-9.773V51.868h21.865c5.371,0,9.768-4.514,9.768-9.886C83.032,36.607,78.635,32.097,73.264,32.097z"/>
<path d="M12.138,69.047c9.022-2.421,18.48-0.301,27.456,1.362c8.288,1.533,16.441,2.618,24.846,1.41
	c8.955-1.285,16.771-6.298,24.501-10.65c3.527-1.985,7.146-4.073,11.023-5.298c4.609-1.457,9.032-0.067,13.193,2.023
	c2.658,1.334,13.115-2.813,9.204-4.776c-19.52-9.798-36.404,5.857-53.484,13.075c-8.213,3.471-19.972-0.624-28.289-2.074
	c-9.933-1.731-19.797-1.972-29.595,0.657c-1.181,0.317-5.624,1.662-5.091,3.652C6.436,70.419,10.958,69.364,12.138,69.047
	L12.138,69.047z"/>
</svg>
)
export default AddTrailIconSVG;