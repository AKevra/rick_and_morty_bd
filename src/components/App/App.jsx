import React from 'react';
import './App.css';
import Header from '../Header';
import CharactersList from '../CharactersList';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import EpisodesList from '../EpisodesList';
import CharacterPage from '../CharacterPage';
import EpisodePage from '../EpisodePage';
import LocationList from '../LocationList';
import LocationPage from '../LocationPage/LocationPage';


const App = () => {
    return (
        <BrowserRouter>
             <div className="App">
                <Header />
                <Switch>
                    <Route path='/characters'>
                        <CharactersList />
                    </Route>
                    <Route path='/episodes'>
                        < EpisodesList />
                    </Route>
                    <Route path={`/locations`}>
                         <LocationList />
                    </Route>
                    <Route path={`/location/:id`}>
                        < LocationPage />
                    </Route>
                    <Route path={`/character/:id`}>
                        < CharacterPage />
                    </Route>
                    <Route path={`/episode/:id`}>
                        < EpisodePage />
                    </Route>
                    
                </Switch>
               
            </div>
        </BrowserRouter>
      
       
       
        
    );
}

export default App;