
import React, { useState} from 'react';
import NavigationApp from './src/navigations';
import Context from './src/screens/Context'

export default function App() {
  const [context, setContext] = useState([])

  return (
    <Context.Provider value={[context, setContext]}>
    <NavigationApp></NavigationApp>
  </Context.Provider>
  );
}

