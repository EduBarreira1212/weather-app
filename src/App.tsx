import styled from 'styled-components';
import FiveDaysWeather from './components/FiveDaysWeather';
import Header from './components/Header';
import Input from './components/Input';
import TodayWeather from './components/TodayWeather';

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #1A0E4A;
  color: white;
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
