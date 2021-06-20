import * as React from 'react';

import { useGlobalStyles } from './globalStyle';
import Header from './Header';
import { useStyles } from './style';

function App() {
  useGlobalStyles();
  const scopedClasses = useStyles();
  return (
    <div className="foo">
      <Header text="123" />
      <p>Content!!!</p>
      <h5 className="header">Now</h5>
      <button className={scopedClasses.myButton}>
        <span className={scopedClasses.myLabel}>Click me</span>
      </button>
    </div>
  );
}

export default App;
