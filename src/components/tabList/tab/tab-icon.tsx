const TabIcon: JSX.Element = (
  <svg className="tab__icon" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect className="tab__icon-body" x="27" width="27" height="27" rx="5" transform="rotate(90 27 0)" />
    <g clip-path="url(#clip0_346_4328)">
      <path
        className="tab__icon-arrow"
        d="M12 9L17 13.5L12 18"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_346_4328">
        <rect width="19" height="19" transform="matrix(0 1 -1 0 23 4)" />
      </clipPath>
    </defs>
  </svg>
);

export default TabIcon;
