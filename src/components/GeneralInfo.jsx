/* eslint-disable react/prop-types */
export default function GeneralInfo({
  fullName,
  handleFullNameChange,
  email,
  handleEmailChange,
  phone,
  handlePhoneChange,
  address,
  handleAddressChange,
}) {
  return (
    <>
      <form>
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
