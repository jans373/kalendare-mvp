import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function App() {
  const canvasRef = useRef(null);
  const fabricRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas('canvas', {
      width: 800,
      height: 600,
      backgroundColor: '#f0f0f0',
    });
    fabricRef.current = canvas;
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (f) {
      const data = f.target.result;
      fabric.Image.fromURL(data, function (img) {
        img.set({
          left: 100,
          top: 100,
          scaleX: 0.5,
          scaleY: 0.5,
        });
        fabricRef.current.add(img);
        fabricRef.current.setActiveObject(img);
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📅 Online Fotokalendář</h1>
      <input type="file" onChange={handleImageUpload} />
      <br /><br />
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
