import React from 'react'
import { Route } from 'react-router-dom'
import App from './components/App'
import SignUp from './components/signup/SignUp'
import Upload from './components/Upload'

export default (
    <div className="container">
    <Route exact path="/" component={App}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/upload" component={Upload}/>
    </div>
)
