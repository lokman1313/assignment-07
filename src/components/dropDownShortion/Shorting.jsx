"use client";

const Shorting = ({ setFilter }) => {
    
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        Filter timeline
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
      >
        <li onClick={() => setFilter("All")}><a>All</a></li>
        <li onClick={() => setFilter("Call")}><a>Call</a></li>
        <li onClick={() => setFilter("Text")}><a>Text</a></li>
        <li onClick={() => setFilter("Video Call")}><a>Video Call</a></li>
      </ul>
    </div>
  );
};

export default Shorting;