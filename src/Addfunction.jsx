import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

export default function Addfunction({ onNewitem }) {
  const [nameChange, setNameChange] = useState();
  const [dateChange, setDateChange] = useState();

  const handleNameChnage = (event) => {
    setNameChange(event.target.value);
  };
  const handleDateChnage = (event) => {
    setDateChange(event.target.value);
  };

  const addButtonHandling = () => {
    onNewitem(nameChange, dateChange);
    setNameChange("");
    setDateChange("");
  };

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={nameChange}
            onChange={handleNameChnage}
          />
        </div>

        <div className="col-4">
          <input type="date" onChange={handleDateChnage} />
        </div>

        <div className="col-2">
          <button
            onClick={addButtonHandling}
            type="button"
            value={dateChange}
            className="btn btn-success"
          >
            <IoAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
