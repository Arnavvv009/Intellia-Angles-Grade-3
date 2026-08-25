import React, { useState, useRef, useEffect } from 'react';
import AngleViewer from './AngleViewer';
import { classifyAngle, ANGLE_TYPES } from '../../data/angleData';

// Drag-to-rotate angle arm using the same Pointer/Mouse/Touch event pattern as the
// original ShapeRotator's drag-to-rotate 3D stage, adapted to a single 2D arm drag.
export default function AngleRotator({
  degrees,
  onChange = null,
  size = 220,
  highlight = null,
  showTester = false,
  showDegreeLabel = true,
  autoAnimate = false,
  interactive = true,
}) {
  const [localDegrees, setLocalDegrees] = useState(degrees ?? 90);
  const stageRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (degrees !== undefined && degrees !== null) setLocalDegrees(degrees);
  }, [degrees]);

  // Idle demo sweep when nobody is interacting yet
  useEffect(() => {
    if (!autoAnimate) return;
    let animId;
    let dir = 1;
    const tick = () => {
      setLocalDegrees(prev => {
        let next = prev + dir * 0.6;
        if (next > 170) dir = -1;
        if (next < 10) dir = 1;
        return next;
      });
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [autoAnimate]);

  const updateFromPointer = (clientX, clientY) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height * 0.72;
    const dx = clientX - cx;
    const dy = cy - clientY; // invert so up is positive
    let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (angle < 0) angle += 360;
    // Clamp to 0-180 for a sensible teaching range (arm stays above the fixed horizontal arm)
    angle = Math.max(2, Math.min(178, angle));
    setLocalDegrees(angle);
    if (onChange) onChange(angle);
  };

  const onMouseDown = (e) => {
    if (!interactive) return;
    isDragging.current = true;
    updateFromPointer(e.clientX, e.clientY);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  const onMouseMove = (e) => { if (isDragging.current) updateFromPointer(e.clientX, e.clientY); };
  const onMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onTouchStart = (e) => {
    if (!interactive || e.touches.length === 0) return;
    isDragging.current = true;
    updateFromPointer(e.touches[0].clientX, e.touches[0].clientY);
  };
  const onTouchMove = (e) => {
    if (!interactive || e.touches.length === 0) return;
    updateFromPointer(e.touches[0].clientX, e.touches[0].clientY);
  };
  const onTouchEnd = () => { isDragging.current = false; };

  const classification = classifyAngle(localDegrees);
  const color = ANGLE_TYPES[classification].color;

  return (
    <div
      ref={stageRef}
      className="view-3d-stage"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: 'none', cursor: interactive ? 'grab' : 'default' }}
    >
      <AngleViewer
        degrees={localDegrees}
        size={size}
        highlight={highlight}
        color={color}
        showTester={showTester}
        showDegreeLabel={showDegreeLabel}
      />
    </div>
  );
}
