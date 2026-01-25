export function MainNav() {
  return (
    <>
      <div className="flex between border-b border-gray-200 -mx-[14px] px-[14px] py8">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
          <path
            stroke="gray"
            strokeWidth="0.3"
            d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"
          ></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
          <path
            stroke="gray"
            strokeWidth="0.3"
            d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
          ></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" role="img" aria-label="Messenger">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M12 2C6.48 2 2 6.07 2 11.07c0 2.86 1.44 5.41 3.73 7.09V22l3.41-1.87 c.91.25 1.87.38 2.86.38 5.52 0 10-4.07 10-9.07S17.52 2 12 2z"
          />
          <path fill="currentColor" d="M12.45 15.07l-2.67-2.84-5.28 2.84 5.81-6.22 2.67 2.84 5.28-2.84-5.81 6.22z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" role="img" aria-label="Reels">
          <rect x="3" y="4" width="18" height="16" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1="3" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth="2" />
          <path d="M10 11l6 3-6 3z" fill="currentColor" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
          <path
            stroke="gray"
            strokeWidth="0.3"
            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"
          ></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" role="img" aria-label="Market">
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M3 9l2-5h14l2 5" />
          <path fill="none" stroke="currentColor" strokeWidth="2" d="M3 9h18v2c0 1.1-.9 2-2 2s-2-.9-2-2c0 1.1-.9 2-2 2s-2-.9-2-2c0 1.1-.9 2-2 2s-2-.9-2-2c0 1.1-.9 2-2 2s-2-.9-2-2V9z" />
          <rect x="5" y="13" width="14" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="10" y="15" width="4" height="6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </>
  );
}
