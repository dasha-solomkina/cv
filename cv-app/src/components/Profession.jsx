/* eslint-disable react/prop-types */
export default function ProfessionFrom({
  companyName,
  handleCompanyNameChange,
  position,
  handlePositionChange,
  startDateJob,
  handleStartDateJobChange,
  endDateJob,
  handleEndDateJobChange,
  locationJob,
  handleLocationJobChange,
  description,
  handleDescriptionChange,
}) {
  return (
    <>
      <form>
        <label>
          Company Name{' '}
          <input value={companyName} onChange={handleCompanyNameChange} />
        </label>
        <label>
          Position <input value={position} onChange={handlePositionChange} />
        </label>
        <label>
          Start Date{' '}
          <input value={startDateJob} onChange={handleStartDateJobChange} />
        </label>
        <label>
          End Date{' '}
          <input value={endDateJob} onChange={handleEndDateJobChange} />
        </label>
        <label>
          Locations{' '}
          <input value={locationJob} onChange={handleLocationJobChange} />
        </label>
        <label>
          Description (optional)
          <textarea
            value={description}
            onChange={handleDescriptionChange}
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
