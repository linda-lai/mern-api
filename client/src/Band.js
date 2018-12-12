import React from 'react';

const Band = (props) => {
    console.log(props.description);
    return(
         <div>
            <h1>{props.name}</h1>
            <p>Genre: {props.genre}</p>
            <p>Albums: {props.albums}</p>
            <a href={props.url}>View {props.name} in Spotify</a>
         </div>
        );
}

export default Band;