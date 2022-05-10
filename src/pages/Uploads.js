import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import "../App.css";
function Uploads() {
  const navigate = useNavigate();
  const [picture, setpicture] = useState();
  const [name, setname] = useState("");
  const handlerPicture = () => {
    const data = new FormData();
    data.append("file", picture);
    data.append("name", name);
    try {
      axios
        .post("https://uploadapiexpress.herokuapp.com/create/", data)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((error) => console.log(error.responses));
    } catch (error) {}
  };
  return (
    <div className="p-6">
      <p className=" text-6xl text-blue-400">Uploads</p>
      <div className="content mt-10 space-y-2 flex flex-col items-start">
        <input
          className=" border py-2 outline-none rounded shadow px-1 w-80"
          type="text"
          name=""
          placeholder="Name"
          onChange={(e) => setname(e.target.value)}
        />
        <div className="mt-2 relative  shadow p-4 inline-block w-80">
          <input
            className="file cursor-pointer bg-transparent border-0"
            onChange={(e) => setpicture(e.target.files[0])}
            type="file"
            name="file"
            id=""
          />
        </div>
        <button
          onClick={handlerPicture}
          className=" bg-blue-100 px-2 py-1 mt-1 hover:bg-blue-300 rounded shadow font-medium text-blue-500"
        >
          Sauvegarder
        </button>
      </div>
    </div>
  );
}

export default Uploads;
