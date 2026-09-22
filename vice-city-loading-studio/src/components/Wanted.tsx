const StarGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5l2.72 6.06 6.61.62-4.98 4.38 1.46 6.48L12 16.9l-5.81 3.14 1.46-6.48-4.98-4.38 6.61-.62L12 2.5z" />
  </svg>
);

interface WantedProps {
  value: number;
  max?: number;
  /** Present → renders an interactive control; absent → static display. */
  onChange?: (value: number) => void;
  className?: string;
}

export default function Wanted({
  value,
  max = 5,
  onChange,
  className,
}: WantedProps) {
  const stars = Array.from({ length: max }, (_, i) => i + 1);

  if (!onChange) {
    return (
      <div className={`wanted ${className ?? ''}`} aria-label={`Wanted level ${value} of ${max}`}>
        {stars.map((n) => (
          <span key={n} className={`star ${n <= value ? 'star--on' : ''}`}>
            <StarGlyph />
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`wanted wanted--input ${className ?? ''}`} role="group" aria-label="Wanted level">
      {stars.map((n) => (
        <button
          key={n}
          type="button"
          className={`star ${n <= value ? 'star--on' : ''}`}
          aria-label={`Set wanted level to ${n}`}
          aria-pressed={n <= value}
          onClick={() => onChange(n === value ? n - 1 : n)}
        >
          <StarGlyph />
        </button>
      ))}
    </div>
  );
}
