/* eslint-disable react/prop-types */
export default function Canvas({
  fullName,
  email,
  phone,
  address,
  startDate,
  endDate,
  location,
  schoolName,
  degree,
  startDateJob,
  endDateJob,
  locationJob,
  companyName,
  position,
  description,
}) {
  return (
    <div>
      <div className="top">
        <h3>{fullName}</h3>
        <div className="contact">
          <p id="email">{email}</p>
          <p id="phone">{phone}</p>
          <p id="address">{address}</p>
        </div>
      </div>
      <h4>Education</h4>
      <div className="education">
        <div className="date-location">
          <p>
            {startDate}-{endDate}
          </p>
          <p>{location}</p>
        </div>
        <div className="uni">
          <h5>{schoolName}</h5>
          <p>{degree}</p>
        </div>
      </div>
      <h4>Work Experience</h4>
      <div className="professional">
        <div className="date-location">
          <p>
            {startDateJob}-{endDateJob}
          </p>
          <p>{locationJob}</p>
        </div>
        <div className="work">
          <h5>{companyName}</h5>
          <p className="position">{position}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
