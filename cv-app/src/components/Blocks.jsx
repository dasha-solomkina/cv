export default function Block({ title, children, isActive, onShow }) {
  return (
    <div className="block">
      <h2>{title}</h2>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button className="editBtn" onClick={onShow}>
          Edit
        </button>
      )}
    </div>
  );
}
