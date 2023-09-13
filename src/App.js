import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import Introduction from './components/Introduction';

const App = () => {
  const [numMs, setNumMs] = useState(0);
  const timeStart = Number(new Date('0000-01-01T00:00:00Z'));
  const getNumMs = () => {
    setNumMs(Date.now() - timeStart);
  }
  setTimeout(getNumMs, 1000)
  return <>
    <Clock numMs={numMs} />
    <Introduction />
  </>;
}

export default App;
