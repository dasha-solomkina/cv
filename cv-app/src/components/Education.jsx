import { useState } from 'react';
// import 'src/App.css';

export default function EducationFrom() {
  const [schoolName, setSchoolName] = useState('HSE');
  const [degree, setDegree] = useState('Sociology');
  const [startDate, setStartDate] = useState('2018');
  const [endDate, setEndDate] = useState('2022');
  const [location, setLocation] = useState('Brazil');

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

  return (
    <>
      <form>
        {/* <h2>General Information</h2> */}
        <label>
          School Name{' '}
          <input value={schoolName} onChange={handleSchoolNameChange} />
        </label>
        <label>
          Degree <input value={degree} onChange={handleDegreeChange} />
        </label>
        <label>
          Start Date{' '}
          <input value={startDate} onChange={handleStartDateChange} />
        </label>
        <label>
          End Date <input value={endDate} onChange={handleEndDateChange} />
        </label>
        <label>
          Locations <input value={location} onChange={handleLocationChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
