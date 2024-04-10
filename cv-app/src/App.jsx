//import { useState } from 'react';
// import './App.css';
import GeneralForm from './components/GeneralInfo.jsx';
import EducationFrom from './components/Education.jsx';
import ProfessionFrom from './components/Profession.jsx';
import Block from './components/Blocks.jsx';
import { useState } from 'react';
import Canvas from './components/Canvas.jsx';
import Header from './components/Header.jsx';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="app">
      <div className="builder">
        <Header />

        <Block
          title="General Information"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          <GeneralForm />
        </Block>
        <Block
          title="Education"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          <EducationFrom />
        </Block>
        <Block
          title="Professional Experience"
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        >
          <ProfessionFrom />
        </Block>
      </div>
      <div className="canvas block">
        <Canvas />
      </div>
    </div>
  );
}

export default App;
