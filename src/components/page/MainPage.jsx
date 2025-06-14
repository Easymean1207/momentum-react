import { useState, useEffect } from 'react';
import Clock from '../UI/Clock';
import Quotes from '../UI/Quotes';
import Background from '../UI/Background';
import Input from '../UI/Input';
import Button from '../UI/Button';
import MissionList from '../UI/MissionList';
import Weather from '../UI/Weather';

const quotes = [
  {
    quote: '나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다',
    author: '랄프 왈도 에미슨',
  },
  {
    quote: '항상 맑으면 사막이 된다. 비가 내리고 바람이 불어야만 비옥한 땅이 된다.',
    author: '스페인 속담',
  },
  {
    quote: '인생에서 가장 슬픈 세 가지. 할 수 있었는데, 해야 했는데, 해야만 했는데',
    author: '루이스 E.분',
  },
  {
    quote: '같은 실수를 두려워하되 새로운 실수를 두려워하지 마라. 실수는 곧 경험이다.',
    author: "도서 '어떤 하루' 中",
  },
  {
    quote: '오늘은 당신의 남은 인생 중, 첫 번째 날이다.',
    author: "영화 '아메리칸 뷰티' 中",
  },
  {
    quote: '인생은 곱셉이다. 어떤 기회가 와도 내가 제로면 아무런 의미가 없다.',
    author: '나카무라 미츠루',
  },
  {
    quote: '별은 바라보는 자에게 빛을 준다.',
    author: "도서 '드래곤 라자' 中",
  },
  {
    quote: '생명이 있는 한 희망이 있다. 실망을 친구로 삼을 것인가, 아니면 희망을 친구로 삼을 것인가.',
    author: '위트',
  },
  {
    quote:
      '슬픔이 그대의 삶으로 밀려와 마음을 흔돌고 소중한 것을 쓸어가 버릴 때면 그대 또한 가슴에 대고 말하라, "이 또한 지나가리라"',
    author: '랜터 윌슨 스미스',
  },
  {
    quote: '오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다',
    author: '앙드레 말로',
  },
  {
    quote: '내 비장의 무기는 아직 내 손안에 있다. 그것은 바로 희망이다.',
    author: '나폴레옹 보나파르트',
  },
];

function MainPage() {
  const [quote, setQuote] = useState({ quote: quotes[0].quote, author: quotes[0].author });
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [currentMission, setCurrentMission] = useState('');
  const [missions, setMissions] = useState([]);
  const [apiKey, setApiKey] = useState('');

  // 이름 입력 관리 함수
  const handleNameChange = (event) => {
    setName(event.target.value);
    // console.log(event.target.value);
  };

  // 인사말 관리 함수
  const handleGreetingChange = () => {
    if (!name?.trim()) {
      alert('이름을 입력해주세요.');
      setDisplayName();
      localStorage.removeItem('name');
    } else {
      setDisplayName(name);
      localStorage.setItem('name', JSON.stringify(name));
    }
  };

  // 미션 입력 관리 함수
  const handleMissionChange = (event) => {
    setCurrentMission(event.target.value);
    // console.log(event.target.value);
  };

  // 미션 추가 함수
  const addMission = () => {
    if (!currentMission?.trim()) {
      alert('미션을 입력해주세요.');
      return;
    }
    setMissions((prevMissions) => [...prevMissions, currentMission]);
    localStorage.setItem('missions', JSON.stringify([...missions, currentMission]));
    setCurrentMission('');
  };

  const deleteMission = (deleteIndex) => {
    setMissions(missions.filter((_, idx) => idx !== deleteIndex));
    const updatedMissions = missions.filter((_, idx) => idx !== deleteIndex);
    localStorage.setItem('missions', JSON.stringify(updatedMissions));
  };

  // API 키 입력 관리 함수
  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const saveAPiKey = () => {
    localStorage.setItem('apiKey', apiKey);
  };

  // 5초마다 명언 자동 변경
  useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Background>
        <Clock />
        <Quotes quote={quote.quote} author={quote.author} />
        {displayName && (
          <p style={{ color: 'black', fontWeight: 'bolder', fontSize: '1.25rem' }}>Hello, {displayName}!</p>
        )}
        <Input type="text" placeholder="Who are you?" value={name} handleInputChange={handleNameChange} />
        <Button onClick={handleGreetingChange} />
        <br />
        <Input
          type="text"
          placeholder="Add your today's mission"
          value={currentMission}
          handleInputChange={handleMissionChange}
        />
        <Button title="add on" onClick={addMission} />
        <MissionList contents={missions} onDeleteMission={deleteMission} />
        <Weather apiKey={apiKey} handleAPIKeyChange={handleApiKeyChange} saveAPIKey={saveAPiKey} />
      </Background>
    </div>
  );
}

export default MainPage;
