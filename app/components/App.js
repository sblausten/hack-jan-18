import React from 'react';
import ListContainer from './ListContainer';


export default function App({client}) {
    return (<div>
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">BBC People Wire</a>
        </nav>
        <ListContainer client={client} />
    </div>)
};
