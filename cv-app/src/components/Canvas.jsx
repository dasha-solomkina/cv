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
      <div className="education">
        <h4>Education</h4>
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
    </div>
  );
}
