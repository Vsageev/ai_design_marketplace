'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type ShaderSettings = {
  threshold: number;
  grainSpeed: number;
  spotRadius: number;
  mouseInfluence: number;
  invert: number;
  brightness: number;
};

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;
  uniform float u_threshold;
  uniform float u_grainSpeed;
  uniform float u_spotRadius;
  uniform float u_mouseInfluence;
  uniform float u_invert;
  uniform float u_brightness;

  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    // Grain animated over time
    float grain = random(uv + u_time * u_grainSpeed);

    // Spotlight center: blend between screen center and mouse position
    vec2 center = mix(vec2(0.5), u_mouse, u_mouseInfluence);

    // Correct aspect ratio for distance calculation
    vec2 corrected = uv;
    corrected.x *= u_resolution.x / u_resolution.y;
    vec2 centerCorrected = center;
    centerCorrected.x *= u_resolution.x / u_resolution.y;

    float dist = distance(corrected, centerCorrected);

    // Dither: compare grain against distance-based threshold
    float spotlight = smoothstep(u_spotRadius, u_spotRadius * 0.2, dist);
    float dither = step(grain, spotlight * u_threshold);

    // Apply invert
    dither = mix(dither, 1.0 - dither, u_invert);

    // Apply brightness offset
    float color = clamp(dither + u_brightness, 0.0, 1.0);

    gl_FragColor = vec4(vec3(color), 1.0);
  }
`;

const cssStyles = `
  .cs-root {
    --bg: #0a0a0a;
    --ink: #f4f4f4;
    --muted: #9aa3b2;
    --border: rgba(255, 255, 255, 0.1);

    min-height: 100vh;
    background: var(--bg);
    color: var(--ink);
    padding-bottom: 72px;
  }

  .cs-controls {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .cs-controls-title {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--muted);
    margin: 0;
  }

  .cs-slider-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 18px 28px;
  }

  .cs-slider {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .cs-slider-label {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: var(--ink);
  }

  .cs-slider-value {
    font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
    color: var(--muted);
    font-size: 12px;
  }

  .cs-range {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
  }

  .cs-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #f4f4f4;
    border: 2px solid #0a0a0a;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.12);
  }

  .cs-range::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #f4f4f4;
    border: 2px solid #0a0a0a;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.12);
  }

  .cs-demo {
    position: relative;
    height: 420px;
    margin: 0 auto 48px;
    max-width: 1200px;
    border: 1px solid var(--border);
    border-radius: 18px;
    overflow: hidden;
    background: #000;
    cursor: crosshair;
  }

  .cs-demo-label {
    position: absolute;
    top: 16px;
    left: 18px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--muted);
    z-index: 2;
    pointer-events: none;
  }

  .cs-canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  .cs-variants {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }

  .cs-variant {
    position: relative;
    height: 240px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--border);
    background: #000;
  }

  .cs-variant-label {
    position: absolute;
    bottom: 14px;
    left: 16px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--muted);
    z-index: 2;
    pointer-events: none;
  }

  .cs-fallback {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: var(--muted);
    background: rgba(8, 10, 14, 0.9);
    text-align: center;
    padding: 16px;
  }

  @media (max-width: 640px) {
    .cs-demo { height: 300px; margin-bottom: 36px; }
    .cs-variant { height: 180px; }
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('Unable to create shader');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(info || 'Shader compile failed');
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vertex: string, fragment: string) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment);
  const program = gl.createProgram();
  if (!program) throw new Error('Unable to create program');
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const info = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error(info || 'Program link failed');
  }
  return program;
}

function DitherCanvas({
  className,
  settings,
  trackMouse,
}: {
  className?: string;
  settings: ShaderSettings;
  trackMouse?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [supported, setSupported] = useState(true);
  const settingsRef = useRef(settings);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    settingsRef.current = settings;
  }, [settings]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!trackMouse) return;
      const rect = e.currentTarget.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1.0 - (e.clientY - rect.top) / rect.height,
      };
    },
    [trackMouse]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) {
      setSupported(false);
      return;
    }

    let program: WebGLProgram;
    try {
      program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
    } catch (error) {
      console.error(error);
      setSupported(false);
      return;
    }

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const uniforms = {
      time: gl.getUniformLocation(program, 'u_time'),
      resolution: gl.getUniformLocation(program, 'u_resolution'),
      mouse: gl.getUniformLocation(program, 'u_mouse'),
      threshold: gl.getUniformLocation(program, 'u_threshold'),
      grainSpeed: gl.getUniformLocation(program, 'u_grainSpeed'),
      spotRadius: gl.getUniformLocation(program, 'u_spotRadius'),
      mouseInfluence: gl.getUniformLocation(program, 'u_mouseInfluence'),
      invert: gl.getUniformLocation(program, 'u_invert'),
      brightness: gl.getUniformLocation(program, 'u_brightness'),
    };

    let animationFrame = 0;
    const startTime = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const render = (time: number) => {
      resize();
      const elapsed = (time - startTime) / 1000;
      const current = settingsRef.current;
      const mouse = mouseRef.current;

      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform1f(uniforms.time, elapsed);
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
      gl.uniform2f(uniforms.mouse, mouse.x, mouse.y);
      gl.uniform1f(uniforms.threshold, current.threshold);
      gl.uniform1f(uniforms.grainSpeed, current.grainSpeed);
      gl.uniform1f(uniforms.spotRadius, current.spotRadius);
      gl.uniform1f(uniforms.mouseInfluence, current.mouseInfluence);
      gl.uniform1f(uniforms.invert, current.invert);
      gl.uniform1f(uniforms.brightness, current.brightness);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
      if (buffer) gl.deleteBuffer(buffer);
      if (program) gl.deleteProgram(program);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas ref={canvasRef} className={className} onMouseMove={handleMouseMove} />
      {!supported && (
        <div className="cs-fallback">WebGL is not available in this browser.</div>
      )}
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="cs-slider">
      <span className="cs-slider-label">
        {label}
        <span className="cs-slider-value">{value.toFixed(2)}</span>
      </span>
      <input
        className="cs-range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </label>
  );
}

export default function ClassicSharedPage() {
  const [threshold, setThreshold] = useState(0.85);
  const [grainSpeed, setGrainSpeed] = useState(0.05);
  const [spotRadius, setSpotRadius] = useState(0.7);
  const [mouseInfluence, setMouseInfluence] = useState(0.8);
  const [invert, setInvert] = useState(0);
  const [brightness, setBrightness] = useState(0.0);

  const mainSettings = useMemo<ShaderSettings>(
    () => ({ threshold, grainSpeed, spotRadius, mouseInfluence, invert, brightness }),
    [threshold, grainSpeed, spotRadius, mouseInfluence, invert, brightness]
  );

  return (
    <div className="cs-root">
      <style>{cssStyles}</style>

      <div className="cs-controls">
        <p className="cs-controls-title">Shader Controls</p>
        <div className="cs-slider-grid">
          <Slider label="Threshold" value={threshold} min={0.1} max={1.0} step={0.01} onChange={setThreshold} />
          <Slider label="Grain Speed" value={grainSpeed} min={0} max={0.3} step={0.005} onChange={setGrainSpeed} />
          <Slider label="Spot Radius" value={spotRadius} min={0.1} max={1.5} step={0.01} onChange={setSpotRadius} />
          <Slider label="Mouse Influence" value={mouseInfluence} min={0} max={1} step={0.01} onChange={setMouseInfluence} />
          <Slider label="Invert" value={invert} min={0} max={1} step={1} onChange={setInvert} />
          <Slider label="Brightness" value={brightness} min={-0.2} max={0.2} step={0.01} onChange={setBrightness} />
        </div>
      </div>

      <section className="cs-demo">
        <span className="cs-demo-label">Live Shader — Move cursor to steer spotlight</span>
        <DitherCanvas className="cs-canvas" settings={mainSettings} trackMouse />
      </section>

      <section className="cs-variants">
        <div className="cs-variant">
          <span className="cs-variant-label">Tight Spotlight</span>
          <DitherCanvas
            className="cs-canvas"
            settings={{
              threshold: 0.9,
              grainSpeed: 0.04,
              spotRadius: 0.35,
              mouseInfluence: 0,
              invert: 0,
              brightness: 0.0,
            }}
          />
        </div>
        <div className="cs-variant">
          <span className="cs-variant-label">Inverted Halo</span>
          <DitherCanvas
            className="cs-canvas"
            settings={{
              threshold: 0.8,
              grainSpeed: 0.06,
              spotRadius: 0.6,
              mouseInfluence: 0,
              invert: 1,
              brightness: 0.0,
            }}
          />
        </div>
        <div className="cs-variant">
          <span className="cs-variant-label">Slow Dissolve</span>
          <DitherCanvas
            className="cs-canvas"
            settings={{
              threshold: 0.7,
              grainSpeed: 0.01,
              spotRadius: 1.0,
              mouseInfluence: 0,
              invert: 0,
              brightness: 0.05,
            }}
          />
        </div>
      </section>
    </div>
  );
}
