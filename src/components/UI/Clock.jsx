import { useState, useEffect } from 'react';
import './digitalFont.css';

const clockStyle = {
  fontFamily: 'LABDigital-Regular',
  fontSize: '2.5rem',
  color: 'black',
};

const loadingMessage = '로딩 중... ⌛';

function Clock() {
  const [time, setTime] = useState(loadingMessage);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Intl.DateTimeFormat('kr', { timeStyle: 'medium', hour12: false }).format(new Date()));
    }, 1000);

    return () => clearInterval(timeInterval); // 컴포넌트 언마운트 시 정리
  }, []);

  return (
    <>
      <h2 style={clockStyle}>현재 시간: {time}</h2>
    </>
  );
}

export default Clock;
