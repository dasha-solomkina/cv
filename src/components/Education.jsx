/* eslint-disable react/prop-types */

export default function EducationFrom({
  schoolName,
  handleSchoolNameChange,
  degree,
  handleDegreeChange,
  startDate,
  handleStartDateChange,
  endDate,
  handleEndDateChange,
  location,
  handleLocationChange,
}) {
  return (
    <>
      <form>
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
          Location <input value={location} onChange={handleLocationChange} />
        </label>
      </form>
    </>
  );
}
