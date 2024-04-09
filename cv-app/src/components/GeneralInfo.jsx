import { useState } from 'react';
// import './App.css';

export default function GeneralInfo() {
  const [fullName, setFullName] = useState('Dasha');
  const [email, setEmail] = useState('@');
  const [phone, setPhone] = useState('+55');
  const [address, setAddress] = useState('Brazil');

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

  return (
    <>
      <form>
        {/* <h2>General Information</h2> */}
        <label>
          Full name <input value={fullName} onChange={handleFullNameChange} />
        </label>
        <label>
          Email <input value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Phone number <input value={phone} onChange={handlePhoneChange} />
        </label>
        <label>
          Address <input value={address} onChange={handleAddressChange} />
        </label>
      </form>
    </>
  );
}
