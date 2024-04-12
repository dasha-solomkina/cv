import GeneralForm from './components/GeneralInfo.jsx';
import EducationFrom from './components/Education.jsx';
import ProfessionFrom from './components/Profession.jsx';
import Block from './components/Blocks.jsx';
import { useState } from 'react';
import Canvas from './components/Canvas.jsx';
import Header from './components/Header.jsx';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const initialState = {
    fullName: 'Emily Johnson',
    email: 'emily.johnson@example.com',
    phone: '+1 (555) 123-4567',
    address: 'Main Street, Cityville',
    schoolName: 'Cityville University',
    degree: 'Bachelor of Science in Computer Science',
    startDate: '2018',
    endDate: '2022',
    location: 'Cityville',
    companyName: 'Digital Solutions Corp.',
    position: 'Software Engineer',
    startDateJob: 'Jan, 2022',
    endDateJob: 'Present',
    locationJob: 'Tech Town, State',
    description:
      'Developed and maintained web applications using HTML, CSS, and JavaScript. Collaborated with cross-functional teams to deliver high-quality software solutions on time.',
  };
  const [state, setState] = useState(initialState);

  // Event handlers
  const handleFullNameChange = (e) => {
    setState({ ...state, fullName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setState({ ...state, email: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setState({ ...state, phone: e.target.value });
  };

  const handleAddressChange = (e) => {
    setState({ ...state, address: e.target.value });
  };

  // Education
  const handleSchoolNameChange = (e) => {
    setState({ ...state, schoolName: e.target.value });
  };

  const handleDegreeChange = (e) => {
    setState({ ...state, degree: e.target.value });
  };

  const handleStartDateChange = (e) => {
    setState({ ...state, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    setState({ ...state, endDate: e.target.value });
  };

  const handleLocationChange = (e) => {
    setState({ ...state, location: e.target.value });
  };

  // Professional
  const handleCompanyNameChange = (e) => {
    setState({ ...state, companyName: e.target.value });
  };

  const handlePositionChange = (e) => {
    setState({ ...state, position: e.target.value });
  };

  const handleStartDateJobChange = (e) => {
    setState({ ...state, startDateJob: e.target.value });
  };

  const handleEndDateJobChange = (e) => {
    setState({ ...state, endDateJob: e.target.value });
  };

  const handleLocationJobChange = (e) => {
    setState({ ...state, locationJob: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setState({ ...state, description: e.target.value });
  };

  const handleClearCVChange = () => {
    const updatedState = {};
    for (const key in state) {
      updatedState[key] = '';
    }
    setState(updatedState);
  };

  return (
    <div className="app">
      <div className="builder">
        <Header handleClearCVChange={handleClearCVChange} />

        <Block
          title="General Information"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          <GeneralForm
            fullName={state.fullName}
            handleFullNameChange={handleFullNameChange}
            email={state.email}
            handleEmailChange={handleEmailChange}
            phone={state.phone}
            handlePhoneChange={handlePhoneChange}
            address={state.address}
            handleAddressChange={handleAddressChange}
          />
        </Block>
        <Block
          title="Education"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          <EducationFrom
            schoolName={state.schoolName}
            handleSchoolNameChange={handleSchoolNameChange}
            degree={state.degree}
            handleDegreeChange={handleDegreeChange}
            startDate={state.startDate}
            handleStartDateChange={handleStartDateChange}
            endDate={state.endDate}
            handleEndDateChange={handleEndDateChange}
            location={state.location}
            handleLocationChange={handleLocationChange}
          />
        </Block>
        <Block
          title="Professional Experience"
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        >
          <ProfessionFrom
            companyName={state.companyName}
            handleCompanyNameChange={handleCompanyNameChange}
            position={state.position}
            handlePositionChange={handlePositionChange}
            startDateJob={state.startDateJob}
            handleStartDateJobChange={handleStartDateJobChange}
            endDateJob={state.endDateJob}
            handleEndDateJobChange={handleEndDateJobChange}
            locationJob={state.locationJob}
            handleLocationJobChange={handleLocationJobChange}
            description={state.description}
            handleDescriptionChange={handleDescriptionChange}
          />
        </Block>
      </div>
      <div className="canvas">
        <Canvas
          fullName={state.fullName}
          email={state.email}
          phone={state.phone}
          address={state.address}
          startDate={state.startDate}
          endDate={state.endDate}
          location={state.location}
          schoolName={state.schoolName}
          degree={state.degree}
          startDateJob={state.startDateJob}
          endDateJob={state.endDateJob}
          locationJob={state.locationJob}
          companyName={state.companyName}
          position={state.position}
          description={state.description}
        />
      </div>
    </div>
  );
}

export default App;
