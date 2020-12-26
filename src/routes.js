import React from 'react'
import * as page from './pages'
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom'

const Routes = () => {
    return(
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={() => <page.HomePage currentPage="border"/>}/>
        </Switch>
    </BrowserRouter>
)}
export default Routes