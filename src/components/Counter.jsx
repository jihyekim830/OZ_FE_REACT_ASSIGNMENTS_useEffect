import { useEffect, useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(100);

  useEffect(() => {
    console.log('컴포넌트가 마운트됨!');
  }, []);

  useEffect(() => {
    console.log('리렌더링됨!');
  });

  useEffect(() => {
    console.log('counter2 값이 변경됨');
  }, [counter2]);

  useEffect(() => {
    return () => console.log('컴포넌트가 언마운트됨!');
  }, []);

  return (
    <section>
      <div>
        <div>counter : {counter}</div>
        <button onClick={() => setCounter(counter + 1)}>증가</button>
      </div>
      <div>
        <div>counter : {counter2}</div>
        <button onClick={() => setCounter2(counter2 - 1)}>감소</button>
      </div>
    </section>
  );
}

export default Counter;
