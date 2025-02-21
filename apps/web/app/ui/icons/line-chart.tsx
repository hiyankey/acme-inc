export function LineChart({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 1V12.75C1 13.9926 2.00736 15 3.25 15H15V13.5H3.25C2.83579 13.5 2.5 13.1642 2.5 12.75V1H1ZM14.2971 6.013L14.8101 5.466L13.716 4.4399L13.2029 4.987L9.98259 8.421L7.707 6.1463C7.31646 5.7559 6.6834 5.7559 6.29293 6.1464L4.21967 8.2197L3.68934 8.75L4.75 9.8107L5.28033 9.2803L7.0001 7.5606L9.28723 9.8468C9.68667 10.2461 10.3373 10.2356 10.7236 9.8236L14.2971 6.013Z"
        fill="#D4D4D8"
        fillOpacity="0.5"
      />
    </svg>
  );
} 