import React from 'react';
import './App.css';
import SignUp from './components/signup';

import Apollo from './Providers/apollo';

function App() {
  return (
    <Apollo>
      <div>
        <h3>This is from home</h3>
      </div>
      <SignUp />
    </Apollo>
  );
}

export default App;
