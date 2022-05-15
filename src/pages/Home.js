import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "../assets/IMG-20210511-WA0038.jpg";
import Skeleton from "../components/Skeleton";
function Home() {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      await axios("https://uploadapiexpress.herokuapp.com").then((res) => {
        setData(res.data);
      });
    };
    getData();
  }, []);

  return (
    <div className="p-6">
      <p className=" text-6xl text-blue-400">Home</p>
      <div className="content w-full justify-center md:justify-start   mt-10 flex flex-wrap ">
        {/* CARD */}

        {data ? (
          data.map((elt) => (
            <div key={elt._id} className="md:p-2 lg:w-1/3 md:w-1/2 xl:w-1/4 ">
              <img
                className=" object-cover w-full  photo "
                src={elt.avatar}
                alt="ici"
              />
            </div>
          ))
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}

export default Home;
