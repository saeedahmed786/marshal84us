import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AdminSideBar } from './pages/admin/AdminSideBar'
import { Login } from './pages/auth/login/Login'
import { Register } from './pages/auth/register/Register'
import { Profile } from './pages/profile/Profile'
import { ProjectDashboard } from './pages/projects/ProjectDashboard'
import { ProjectDetails } from './pages/projects/ProjectDetails'
import { Projects } from './pages/projects/Projects'
import { ProjectType } from './pages/projects/ProjectType'
import { TextGen } from './pages/projects/TextGen'

export const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/dashboard' component={AdminSideBar} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/project-dashboard' component={ProjectDashboard} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/project-type' component={ProjectType} />
            <Route exact path='/project-details' component={ProjectDetails} />
            <Route exact path='/text-gen' component={TextGen} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}
