/* eslint-disable react/prop-types */
export default function Canvas({ fullName, email, phone, address }) {
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
    </div>
  );
}
