import React from 'react';
import Greetings from './Greetings'

function App() {
  //컴포넌트에서 함수를 받아오기위해 수정
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  }
  return <Greetings name="World" optional="end" onClick={onClick} />;
}

export default App;
