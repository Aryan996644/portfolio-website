import React, { useEffect, useRef } from 'react';

const GradientCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const trails = [];

    const addTrail = (x, y) => {
      trails.push({
        x,
        y,
        radius: 70 + Math.random() * 40,
        hue: (x + y + Date.now()) % 360,
        alpha: 0.35 + Math.random() * 0.25
      });
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = trails.length - 1; i >= 0; i--) {
        const t = trails[i];
        const gradient = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, t.radius);
        gradient.addColorStop(0, `hsla(${t.hue}, 100%, 75%, ${t.alpha})`);
        gradient.addColorStop(1, `hsla(${(t.hue + 60) % 360}, 100%, 50%, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        ctx.fill();

        t.alpha *= 0.92;
        t.radius *= 0.95;
        if (t.alpha < 0.01 || t.radius < 1) trails.splice(i, 1);
      }

      requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => addTrail(e.clientX, e.clientY);

    window.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1000] mix-blend-screen"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: 'none',
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default GradientCursor;
