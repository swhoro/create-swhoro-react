import React, {lazy, Suspense, useState} from 'react';
import classes from './App.module.css';

function App() {
  const [isShow, setShow] = useState(false);

  const clickHandler = () => {
    if (!isShow)
      setShow(true);
  };

  if (isShow) {
    const A1 = lazy(() => import('./A1'));
    return <div className={classes.red}>
      Hello React!
      <Suspense>
        <A1/>
      </Suspense>
    </div>;
  }

  return <div className={classes.red} onClick={clickHandler}>Hello React!</div>;
}

export default App;
