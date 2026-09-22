export default function Palm({ className }: { className?: string }) {
  // A single flat palm silhouette; mirrored via CSS for the other corner.
  return (
    <svg
      className={className}
      viewBox="0 0 200 260"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M96 260c-4-46-6-92-3-138 1-14 3-28 7-41-10 6-18 15-24 26-3 5-11 3-10-3 3-19 16-36 34-44-13-4-27-2-39 5-5 3-11-3-7-8 12-16 33-23 52-18-9-9-22-14-35-13-6 0-8-8-2-10 21-8 45-1 59 16 2-13 9-25 20-33 5-4 12 2 8 8-6 9-9 19-9 30 14-11 33-14 50-7 6 2 5 11-2 11-12 0-24 4-33 12 18 1 35 11 44 27 3 5-3 11-8 7-11-8-24-12-38-11 12 8 21 20 24 35 1 6-7 9-10 4-7-11-17-19-29-23 5 13 8 27 8 41 1 46-2 92-6 138z" />
    </svg>
  );
}
