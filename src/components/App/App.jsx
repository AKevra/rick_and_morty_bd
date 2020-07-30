import React from 'react';
import './App.css';
import Header from '../Header';
import CharactersList from '../CharactersList';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import EpisodesList from '../EpisodesList';
import CharacterPage from '../CharacterPage';

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
                    <Route path={`/character/:id`}>
                        < CharacterPage />
                    </Route>
                </Switch>
               
            </div>
        </BrowserRouter>
      
       
       
        
    );
}

export default App;