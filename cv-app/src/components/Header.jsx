// import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function SaveAsImage() {
  const content = document.querySelector('.canvas');
  html2canvas(content).then(function (canvas) {
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'image.png';
    link.href = imgData;

    link.click();
  });
}

export default function Header() {
  return (
    <div className="block header">
      <h1>CV Builder</h1>
      <button onClick={SaveAsImage}>Save</button>
      <button>Load Example</button>
      <button>Clear CV</button>
    </div>
  );
}
