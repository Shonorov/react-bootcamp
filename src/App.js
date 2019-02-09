import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {isAuth} from './services';
import * as Pages from './pages';


export const App = ({ isLoggedIn = isAuth() }) => {
  if (isLoggedIn) {
    return (
      <Switch>
        <Route exact path="/main" component={Pages.MainPage}/>,
        <Route exact path="/brands/:char(.)?" component={Pages.BrandsPage}/>,
        <Route exact path="/brands/:brand" component={Pages.BrandsDetailPage}/>,
        <Route exact path="/catalog" component={Pages.CatalogPage}/>,
        <Route exact path="/catalog/:slug" component={Pages.CatalogDetailPage}/>,
        <Route exact path="/personal" component={Pages.PersonalPage}/>,
        <Redirect exact from="/" to="/main" />
        <Redirect exact from="/login" to="/main" />
        <Redirect exact from="/register" to="/main" />
        <Route component={Pages.NotFoundPage} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route exact path="/main" component={Pages.MainPage}/>,
      <Route exact path="/brands/:char(.)?" component={Pages.BrandsPage}/>,
      <Route exact path="/brands/:brand" component={Pages.BrandsDetailPage}/>,
      <Route exact path="/catalog" component={Pages.CatalogPage}/>,
      <Route exact path="/catalog/:slug" component={Pages.CatalogDetailPage}/>,
      <Redirect exact from="/" to="/main" />
      <Route exact path="/login" component={Pages.LoginPage} />
      <Route exact path="/register" component={Pages.RegisterPage} />
      <Redirect exact from="/personal" to="/login" />
      {/*<Redirect to="/login" />*/}
       <Route component={Pages.NotFoundPage} />
    </Switch>
  )
};

export default App;
