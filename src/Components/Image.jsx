import axios from "axios";
import React, { useEffect, useState } from "react";

const Image = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/profiles")
      .then((response) => {
        console.log(response.data.body);
        setProfile(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="bg-red-500 fixed w-full text-2xl ">Image Component</div>

      {profile.map((p) => {
        return (
          <>
            <img src={p.path.substring(55)} alt="Car" />
            <h1>{p.name}</h1>
            <h1>{p.path}</h1>
            <h1>{p.type}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Image;
