import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import img from "../assets/IMG-20210511-WA0038.jpg";
function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = () => {
      axios.get("http://localhost:8000/").then((res) => setData(res.data));
    };
    getData();
  }, []);

  return (
    <div className="p-6">
      <p className=" text-6xl text-blue-400">Home</p>
      <div className="content w-full justify-center md:justify-start   mt-10 flex flex-wrap ">
        {/* CARD */}
        <Suspense fallback={<h1>Loading ...</h1>}>
          {data &&
            data.map((elt) => (
              <div className="p-2 lg:w-1/3 md:w-1/2 xl:w-1/4 shadow">
                <img
                  className=" object-cover photo"
                  src={elt.avatar}
                  alt="ici"
                />
              </div>
            ))}
        </Suspense>
      </div>
    </div>
  );
}

export default Home;
