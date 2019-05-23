import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import { Switch, Route } from 'react-router-dom'
import 'bulma/css/bulma.min.css'

export default function Routes() {
    return <div className="box">
        <h3 className="title">Routes</h3>
        <Switch>
            <Route path="/default" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/index" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/" exact component={Home}></Route>
            <Route path="*" component={PageNotFound}></Route>
        </Switch>
    </div>
}
