import React from 'react';

const Album = (props) => {
    return(
         <div>
            <li>{props.album.songs}</li>
            {/* {console.log(props)} */}
         </div>
        );
}

export default Album;