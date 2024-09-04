import axios from "axios";
import React, { useEffect, useState } from "react";
import Ip from "./Ip";

const AllTask = () => {
  console.log("bhiiiiiiiiiiiiiiiiiiiii");

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://${Ip}:8080/events`)
      .then((response) => {
        setTasks(response.data.body);
        console.log(response.data.body);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const moveToInprogress = (id) => {
    axios
      .patch(`http://${Ip}:8080/events/pending/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const moveToCompleted = (id) => {
    axios
      .patch(`http://${Ip}:8080/events/completed/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const markAsDelete = (id) => {
    axios
      .patch(`http://${Ip}:8080/events/deleted/${id}`)
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-evenly items-start p-8 bg-gray-800 min-h-screen gap-8">
      {/* To Do Column */}
      <div className="flex flex-col gap-6 w-1/3">
        <h1 className="text-2xl text-center py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-900 rounded-lg shadow-md shadow-white">
          To Do
        </h1>
        {tasks.map((t) =>
          true ? (
            <div className="bg-gray-50 hover:shadow-lg hover:shadow-white hover:border-2 hover:border-green-600 flex flex-col justify-between hover:scale-105 transition-all w-full h-52 rounded-xl p-4 shadow-md border border-gray-200">
              <h1 className="text-center text-black font-bold text-lg mb-2">
                {t.title.length <= 20
                  ? t.title
                  : t.title.substring(0) + "..."}
              </h1>
              <p className="text-sm text-center text-gray-700">
                {t.fromDateTime}
              </p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <div className="text-[12px]">
                  <h1>Created: {t.assignedDate.substring(0, 10)}</h1>
                  <h1>
                    Completed:
                    {t.completedDate.substring(0, 10) ===
                    t.assignedDate.substring(0, 10)
                      ? " Not Yet Completed"
                      : "Completed"}
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold text-gray-800">{t.status}</h1>
                </div>
              </div>
              <button
                onClick={() => moveToInprogress(t.id)}
                className="block mt-4 bg-green-500 text-white text-center py-1 rounded-md w-full hover:bg-green-600 transition-all"
              >
                Doing Now
              </button>
            </div>
          ) : null
        )}
      </div>

      {/* In Progress Column */}
      <div className="flex flex-col gap-6 w-1/3">
        <h1 className="text-2xl text-center py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-900 rounded-lg shadow-md shadow-white">
          In Progress
        </h1>
        {tasks.map((t) =>
          t.status === "PENDING" ? (
            <div className="bg-white hover:shadow-lg hover:shadow-white hover:border-2 hover:border-green-600 flex flex-col justify-between hover:scale-105 transition-all w-full h-52 rounded-xl p-4 shadow-md border border-gray-200">
              <h1 className="text-center text-black font-bold text-lg mb-2">
                {t.title.length <= 20
                  ? t.title
                  : t.title.substring(0, 21) + "..."}
              </h1>
              <p className="text-sm text-center text-gray-700">
                {t.des <= 65 ? t.des : t.des.substring(0, 65) + "..."}
              </p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <div className="text-[12px]">
                  <h1>Created: {t.assignedDate.substring(0, 10)}</h1>
                  <h1>
                    Completed:
                    {t.completedDate.substring(0, 10) ===
                    t.assignedDate.substring(0, 10)
                      ? " Yet To Completed"
                      : "Completed"}
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold text-gray-800">{t.status}</h1>
                </div>
              </div>
              <button
                onClick={() => moveToCompleted(t.id)}
                className="block mt-4 bg-green-500 text-white text-center py-1 rounded-md w-full hover:bg-green-600 transition-all"
              >
                Finished
              </button>
            </div>
          ) : null
        )}
      </div>

      {/* Completed Column */}
      <div className="flex flex-col gap-6 w-1/3">
        <h1 className="text-2xl  text-center py-2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-gray-900 rounded-lg shadow-md shadow-white">
          Completed
        </h1>
        {tasks.map((t) =>
          t.status === "COMPLETED" ? (
            <div className="bg-white hover:shadow-lg hover:shadow-white hover:border-2 hover:border-green-600 flex flex-col justify-between hover:scale-105 transition-all w-full h-52 rounded-xl p-4 shadow-md border border-gray-200">
              <h1 className="text-center text-black font-bold text-lg mb-2">
                {t.title.length <= 20
                  ? t.title
                  : t.title.substring(0, 21) + "..."}
              </h1>
              <p className="text-sm text-center text-gray-700">
                {t.des <= 65 ? t.des : t.des.substring(0, 65) + "..."}
              </p>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                <div className="text-[12px]">
                  <h1>Created: {t.assignedDate.substring(0, 10)}</h1>
                  <h1>Completed: {t.completedDate.substring(0, 10)}</h1>
                </div>
                <div>
                  <h1 className="font-bold text-gray-800">{t.status}</h1>
                </div>
              </div>
              <button
                onClick={() => markAsDelete(t.id)}
                className="block mt-4 bg-red-500 text-white text-center py-1 rounded-md w-full hover:bg-red-600 transition-all"
              >
                Delete
              </button>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default AllTask;
