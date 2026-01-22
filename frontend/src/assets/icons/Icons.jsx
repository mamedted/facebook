export const PlusIcon = ({ size = "30" }) => (
  <div className="flex fcy gap5">
    <svg xmlns="http://www.w3.org/2000/svg" width={size} className="rounded bg-gray-200" height={size} viewBox="0 0 24 24" role="img" aria-label="Plus">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"></path>
    </svg>
  </div>
);

export const Menu = ({ size = "30" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className=" rounded bg-gray-200 bi bi-list" viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
    ></path>
  </svg>
);

export const SearchIcon = ({ size = "30" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" className="rounded bg-gray-200 bi bi-search p4" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
  </svg>
);
