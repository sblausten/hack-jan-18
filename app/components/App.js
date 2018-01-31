import React from 'react';
import ListContainer from './ListContainer';


export default function App({client}) {
    return (<div>
        <nav class="navbar navbar-light bbc-nav">
        <a class="navbar-brand bbc-nav" href="#">BBC People Wire</a>
        </nav>
        <ListContainer client={client} />
    </div>)
};
