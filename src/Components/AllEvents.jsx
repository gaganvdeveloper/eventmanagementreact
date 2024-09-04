import axios from "axios";
import React, { useEffect, useState } from "react";
import Ip from "./Ip";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [eid, setEid] = useState();

  const handleUpload = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("eid", eid);
    axios
      .post(`http://${Ip}:8080/profiles`, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://${Ip}:8080/events`)
      .then((response) => {
        console.log(response.data.body);
        setEvents(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3  gap-4">
      {events.map((e, index) => {
        return (
          <div key={index} className="bg-violet-700 h-52 rounded-lg px-4 py-4">
            <div className="float-end text-[12px] bg-violet-600 shadow-inner shadow-white  px-2 rounded-lg">
              <h1>{e.fromDateTime.substring(0, 10)}</h1>
              <h1>
                {e.fromDateTime.substring(11)}
                {e.fromDateTime.substring(11, 13) < 12 ? " am" : " pm"}
              </h1>
            </div>
            <h1 className="capitalize tracking-widest font-bold bg-orange-500 w-fit px-1 rounded-lg text-xl ">
              {e.title.length < 10 ? e.title : e.title.substring(0, 10) + "..."}
            </h1>
            <div className=" mt-4 font-bold flex items-center justify-between">
              <img
                className=" w-32 h-32 rounded-full hover:scale-105 transition-all object-cover "
                src={
                  e.profile == null
                    ? "images\\1d27fe61-0f0d-4f73-a2f0-0cb72fc3927ecloud-2044823_1280.png"
                    : e.profile.path.substring(56)
                }
                alt=""
              />
              <div className="text-[12px] w-fit flex flex-col gap-1 items-center">
                <h1>Chief Guest : {e.chiefGuest}</h1>
                <h1>Organizer : {e.organizer}</h1>
                <h1>
                  {e.fromDateTime.substring(11, 16)} to{" "}
                  {e.toDateTime.substring(11, 16)}{" "}
                </h1>
                <label
                  onClick={() => {
                    setEid(e.id);
                  }}
                  htmlFor="file"
                  className="bg-green-500 p-1 rounded-lg shadow-lg shadow-black"
                >
                  Update Profile
                </label>
                <input
                  className="w-10 h-10 bg-red-300 hidden"
                  type="file"
                  name="file"
                  id="file"
                  onChange={(ev) => {
                    handleUpload(ev.target.files[0]);
                    window.location.reload();
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllEvents;
