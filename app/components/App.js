import React from 'react';
import ListContainer from './ListContainer';


export default function App({client}) {
    return (<div>
        <h2>PEOPLE WIRE</h2>
        <ListContainer client={client} />
    </div>)
};
