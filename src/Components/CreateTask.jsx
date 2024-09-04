import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ip from "./Ip";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [chiefGuest, setChiefGuest] = useState("");
  const [fromDateTime, setFromDateTime] = useState("");
  const [toDateTime, setToDateTime] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://${Ip}:8080/events`, {
        title,
        organizer,
        chiefGuest,
        fromDateTime,
        toDateTime,
      })
      .then((response) => {
        console.log(response.data);
        nav("/all");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="flex items-center text-black justify-center min-h-screen bg-gray-800">
      <div class="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create Task
        </h2>
        <form onSubmit={handleSubmit}>
          <div class="mb-6">
            <input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div class="mb-6">
            <input
              type="text"
              id="organizer"
              onChange={(e) => setOrganizer(e.target.value)}
              placeholder="Enter Organizer"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div class="mb-6">
            <input
              type="text"
              id="chiefguest"
              onChange={(e) => setChiefGuest(e.target.value)}
              placeholder="Enter Chief Guest Name"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div class="mb-6">
            <input
              type="datetime-local"
              id="fromDateTime"
              onChange={(e) => setFromDateTime(e.target.value)}
              placeholder="Enter fromDateTime"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div class="mb-6">
            <input
              type="datetime-local"
              id="toDateTime"
              onChange={(e) => setToDateTime(e.target.value)}
              placeholder="Enter toDateTime"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div class="flex items-center justify-center">
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded-md hover:shadow-lg transition-shadow duration-300"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
