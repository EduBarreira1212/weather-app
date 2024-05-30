import styled from 'styled-components';
import FiveDaysWeather from './components/FiveDaysWeather';
import Header from './components/Header';
import Input from './components/Input';
import TodayWeather from './components/TodayWeather';

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: linear-gradient(188deg, #1A0E4A, #232447, #4B6584, #2E856E, #24A585);
  color: white;

  @media (max-width: 500px) {
    background: linear-gradient(192deg, #1A0E4A, #232447, #4B6584, #2E856E, #24A585);
  }
`

function App() {
  return (
    <Div>
      <Header/>
      <Input/>
      <TodayWeather/>
      <FiveDaysWeather/>
    </Div>
  );
}

export default App;
