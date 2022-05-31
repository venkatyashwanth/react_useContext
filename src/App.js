import React, {useState} from 'react';
import Functionalcontext from './components/Functionalcontext';
import { ThemeProvider } from './components/Themecontext';
function App() {
  return (
      <ThemeProvider>
        <Functionalcontext/>
      </ThemeProvider>
  );
}

export default App;
