interface LicensePlateProps {
  /** State line at the top of the plate. */
  state?: string;
  /** The big plate number. */
  number?: string;
  className?: string;
}

// A Leonida state plate — a small, recognizably GTA motif. Original artwork,
// not a reproduction of any real or in-game plate.
export default function LicensePlate({
  state = 'LEONIDA',
  number = 'VICE·VI',
  className,
}: LicensePlateProps) {
  return (
    <div className={`plate ${className ?? ''}`} aria-hidden="true">
      <span className="plate-bolt plate-bolt--tl" />
      <span className="plate-bolt plate-bolt--tr" />
      <span className="plate-bolt plate-bolt--bl" />
      <span className="plate-bolt plate-bolt--br" />
      <span className="plate-state">{state}</span>
      <span className="plate-number">{number}</span>
      <span className="plate-sun" />
    </div>
  );
}
