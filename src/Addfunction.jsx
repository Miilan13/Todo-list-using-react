import { useRef, useState } from "react";
import { IoAddCircle } from "react-icons/io5";

export default function Addfunction({ onNewitem }) {
  // const [nameChange, setNameChange] = useState();
  // const [dateChange, setDateChange] = useState();

  // const handleNameChnage = (event) => {
  //   setNameChange(event.target.value);
  // };
  // const handleDateChnage = (event) => {
  //   setDateChange(event.target.value);
  // };

  const addButtonHandling = () => {
    let nameChange = nameChangeref.current.value;
    let dateChange = dateChangeref.current.value;
    nameChangeref.current.value = "";
    dateChangeref.current.value = "";
    onNewitem(nameChange, dateChange);
  };

  const nameChangeref = useRef();
  const dateChangeref = useRef();

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            ref={nameChangeref}
            placeholder="Enter Todo Here"
          />
        </div>

        <div className="col-4">
          <input type="date" ref={dateChangeref} />
        </div>

        <div className="col-2">
          <button
            onClick={addButtonHandling}
            type="button"
            className="btn btn-success"
          >
            <IoAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
