import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  color?: string; // hex or rgb
  opacity?: number;
  active?: boolean;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({
  color = '#10b981',
  opacity = 0.16,
  active = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Characters: Katakana, Cyberspace characters, Binary, Hex, Latin
    const chars = '0123456789ABCDEF!@#$%^&*()_+-=~{}[]|<>?/:;010101CSB_CYBER_TERMINAL_PRO_v50';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }

    let lastDraw = 0;
    const fps = 28;
    const interval = 1000 / fps;

    const render = (time: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (time - lastDraw < interval) return;
      lastDraw = time;

      // Translucent black fill for trail effect
      ctx.fillStyle = 'rgba(5, 9, 14, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px 'Fira Code', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Slight highlight on head
        if (Math.random() > 0.92) {
          ctx.fillStyle = '#ffffff';
        } else {
          ctx.fillStyle = color;
        }

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [active, color]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none transition-opacity duration-700 z-0"
      style={{ opacity }}
    />
  );
};
