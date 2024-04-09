import { useState } from 'react';
// import 'src/App.css';

export default function ProfessionFrom() {
  const [companyName, setCompanyName] = useState('Google');
  const [position, setPosition] = useState('Sociology');
  const [startDate, setStartDate] = useState('2018');
  const [endDate, setEndDate] = useState('2022');
  const [location, setLocation] = useState('Brazil');
  const [description, setDescription] = useState('It was fun working there');

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
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
          Company Name{' '}
          <input value={companyName} onChange={handleCompanyNameChange} />
        </label>
        <label>
          Position <input value={position} onChange={handlePositionChange} />
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
        <label>
          Description (optional)
          <textarea
            value={description}
            onChange={setDescription}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </label>
      </form>
    </>
  );
}
