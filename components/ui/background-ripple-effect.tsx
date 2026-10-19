"use client";

import { useMemo, useState } from "react";

const rows = 12;
const cols = 30;
const cellSize = 56;

export function BackgroundRippleEffect() {
  const [clickedCell, setClickedCell] = useState<{ row: number; col: number } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const cells = useMemo(() => Array.from({ length: rows * cols }, (_, index) => index), []);

  return (
    <div className="background-ripple-effect" aria-hidden="true">
      <div
        key={rippleKey}
        className="background-ripple-grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          width: cols * cellSize,
          height: rows * cellSize,
        }}
      >
        {cells.map((index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          const distance = clickedCell ? Math.hypot(clickedCell.row - row, clickedCell.col - col) : 0;

          return (
            <div
              key={index}
              className={`background-ripple-cell${clickedCell ? " animate-cell-ripple" : ""}`}
              style={clickedCell ? {
                "--ripple-delay": `${distance * 55}ms`,
                "--ripple-duration": `${200 + distance * 80}ms`,
              } as React.CSSProperties : undefined}
              onClick={() => {
                setClickedCell({ row, col });
                setRippleKey((key) => key + 1);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
