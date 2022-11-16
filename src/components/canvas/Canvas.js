import React, { useRef, useEffect } from 'react';

import cssPng from '../../img/skills/css.png';

const Canvas = props => {
  const canvasRef = useRef(null);

  //   const draw = (ctx, frameCount) => {
  //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //     ctx.fillStyle = '#000000';
  //     ctx.beginPath();
  //     ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  //     ctx.fill();
  //   };

  useEffect(() => {
    const cssImg = document.getElementById('image1');
    const draw = (ctx, frameCount) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.drawImage(cssImg, 10, 10, 36, 36);
    };

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId;

    //Our draw came here
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <img
        id="image1"
        src={cssPng}
        alt="css icon"
        style={{ display: 'none' }}
      />
      <canvas ref={canvasRef} {...props} />
    </>
  );
};

export default Canvas;
