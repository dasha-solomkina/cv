import GeneralForm from './components/GeneralInfo.jsx';
import EducationFrom from './components/Education.jsx';
import ProfessionFrom from './components/Profession.jsx';
import Block from './components/Blocks.jsx';
import { useState } from 'react';
import Canvas from './components/Canvas.jsx';
import Header from './components/Header.jsx';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullName, setFullName] = useState('Emily Johnson');
  const [email, setEmail] = useState('emily.johnson@example.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [address, setAddress] = useState('Main Street, Cityville');

  const [schoolName, setSchoolName] = useState('Cityville University');
  const [degree, setDegree] = useState(
    'Bachelor of Science in Computer Science'
  );
  const [startDate, setStartDate] = useState('2018');
  const [endDate, setEndDate] = useState('2022');
  const [location, setLocation] = useState('Cityville');

  const [companyName, setCompanyName] = useState('Digital Solutions Corp.');
  const [position, setPosition] = useState('Software Engineer');
  const [startDateJob, setStartDateJob] = useState('Jan, 2022');
  const [endDateJob, setEndDateJob] = useState('Present');
  const [locationJob, setLocationJob] = useState('Tech Town, State');
  const [description, setDescription] = useState(
    'Developed and maintained web applications using HTML, CSS, and JavaScript. Collaborated with cross-functional teams to deliver high-quality software solutions on time.'
  );

  // general
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  // education
  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // professional
  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleStartDateJobChange = (e) => {
    setStartDateJob(e.target.value);
  };

  const handleEndDateJobChange = (e) => {
    setEndDateJob(e.target.value);
  };

  const handleLocationJobChange = (e) => {
    setLocationJob(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="app">
      <div className="builder">
        <Header />

        <Block
          title="General Information"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          <GeneralForm
            fullName={fullName}
            handleFullNameChange={handleFullNameChange}
            email={email}
            handleEmailChange={handleEmailChange}
            phone={phone}
            handlePhoneChange={handlePhoneChange}
            address={address}
            handleAddressChange={handleAddressChange}
          />
        </Block>
        <Block
          title="Education"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          <EducationFrom
            schoolName={schoolName}
            handleSchoolNameChange={handleSchoolNameChange}
            degree={degree}
            handleDegreeChange={handleDegreeChange}
            startDate={startDate}
            handleStartDateChange={handleStartDateChange}
            endDate={endDate}
            handleEndDateChange={handleEndDateChange}
            location={location}
            handleLocationChange={handleLocationChange}
          />
        </Block>
        <Block
          title="Professional Experience"
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        >
          <ProfessionFrom
            companyName={companyName}
            handleCompanyNameChange={handleCompanyNameChange}
            position={position}
            handlePositionChange={handlePositionChange}
            startDateJob={startDateJob}
            handleStartDateJobChange={handleStartDateJobChange}
            endDateJob={endDateJob}
            handleEndDateJobChange={handleEndDateJobChange}
            locationJob={locationJob}
            handleLocationJobChange={handleLocationJobChange}
            description={description}
            handleDescriptionChange={handleDescriptionChange}
          />
        </Block>
      </div>
      <div className="canvas">
        <Canvas
          fullName={fullName}
          email={email}
          phone={phone}
          address={address}
          startDate={startDate}
          endDate={endDate}
          location={location}
          schoolName={schoolName}
          degree={degree}
          startDateJob={startDateJob}
          endDateJob={endDateJob}
          locationJob={locationJob}
          companyName={companyName}
          position={position}
          description={description}
        />
      </div>
    </div>
  );
}

export default App;
