import React from 'react';
import LayoutHeaderNavigation from 'components/layout/header/navigation/Navigation';
import Router from 'components/router/Router';
import 'App.scss';

/**
 * Root stateful component which wraps our app with a simple context.
 * */
function App() {

  return (
    <>
      <LayoutHeaderNavigation/>
      <Router />
    </>
  )
}

export default App;
