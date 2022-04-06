import { useState, useCallback, useMemo } from 'react';
import './App.css';
import ChildArea from './components/ChildArea/ChildArea';

const App = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  const tmp = useMemo(() => 1 + 3, []);
  console.log(tmp);

  return (
    <div className="App">
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={onClickOpen}>Display</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};

export default App;
