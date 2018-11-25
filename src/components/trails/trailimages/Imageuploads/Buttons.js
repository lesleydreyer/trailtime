import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faImages, faImage } from '@fortawesome/free-solid-svg-icons'
import './index.css';

export default props =>
    <div className='buttons fadein'>

        <div className='button'>
            <label htmlFor='single'>
                <p>Single Image</p>
            </label>
            <input type='file' id='single' onChange={props.onChange} />
        </div>

        <div className='button'>
            <label htmlFor='multi'>
                <p>Multiple Images</p>
            </label>
            <input type='file' id='multi' onChange={props.onChange} multiple />
        </div>

    </div>

    //<label htmlFor='single'>
    //    <FontAwesomeIcon icon={faImage} color='#3B5998' size='10x' />
    //</label>
    //            <label htmlFor='multi'>
    //<FontAwesomeIcon icon={faImages} color='#6d84b4' size='10x' />
    //        </label >