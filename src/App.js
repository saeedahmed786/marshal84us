import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AdminSideBar } from './pages/admin/AdminSideBar'
import { Login } from './pages/auth/login/Login'
import { Register } from './pages/auth/register/Register'
import { Profile } from './pages/profile/Profile'

export const App = () => {
  return (
    <div className = 'App'>
        <BrowserRouter> 
          <Switch>
              <Route exact path = '/register' component = {Register} />
              <Route exact path = '/login' component = {Login} />
              <Route exact path = '/dashboard' component = {AdminSideBar} />
              <Route exact path = '/profile' component = {Profile} />
          </Switch>
        </BrowserRouter>
    </div>
  )
}
