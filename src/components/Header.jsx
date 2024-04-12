/* eslint-disable react/prop-types */
import html2canvas from 'html2canvas';

function SaveAsImage() {
  const content = document.querySelector('.canvas');
  html2canvas(content).then(function (canvas) {
    const imgData = canvas.toDataURL('cv/png');
    const link = document.createElement('a');
    link.download = 'cv.png';
    link.href = imgData;

    link.click();
  });
}

function loadExample() {
  window.location.reload();
}

export default function Header({ handleClearCVChange }) {
  return (
    <div className="block header">
      <h1>CV Builder</h1>
      <button onClick={SaveAsImage}>Save</button>
      <button onClick={loadExample}>Load Example</button>
      <button onClick={handleClearCVChange}>Clear CV</button>
    </div>
  );
}
