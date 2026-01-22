export function Header() {
  return (
    <>
      <div className="-mx-[14px] flex between b fcy  py6 px-2 text-[17px] border-b-[6px] border-gray-200">
        <p>Data Mode</p>

        <div className="flex fcy bg-gray-200 gap-2 px-2 py-1 rad4 ">
          <svg id="towerIcon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" role="img" aria-label="Signal Tower">
            <path d="M12 2L6 22h3l1-4h4l1 4h3L12 2z" stroke="currentColor" strokeWidth="2" fill="none" />{" "}
            <path d="M4 8a8 8 0 0 1 16 0M7 8a5 5 0 0 1 10 0" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <p>Buy Data</p>
        </div>
      </div>
    </>
  );
}
