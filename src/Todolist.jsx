import { MdDeleteSweep } from "react-icons/md";

export default function Todolist({ items, handleDelete }) {
  return (
    <>
      {items.map((item, index) => (
        <div className={`customrow row m-3`} key={index}>
          <div className="col-6">{item.name}</div>
          <div className="col-4">{item.duedate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                handleDelete(item.name);
              }}
            >
              <MdDeleteSweep />
            </button>
          </div>
        </div>
      ))}
      <br />
    </>
  );
}
