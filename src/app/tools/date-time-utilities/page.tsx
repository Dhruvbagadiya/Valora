"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

const DateTimeUtilities: React.FC = () => {
  const [currentMilliseconds, setCurrentMilliseconds] = useState<number>(0);
  const [currentSeconds, setCurrentSeconds] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [iconStates, setIconStates] = useState<Record<string, any>>({
    milliseconds: faCopy,
    seconds: faCopy,
    date: faCopy,
    time: faCopy,
  });

  const [inputValue, setInputValue] = useState<string>(
    Math.floor(Date.now() / 1000).toString()
  );
  const [dateFromSeconds, setDateFromSeconds] = useState<string>("");
  const [dateFromMilliseconds, setDateFromMilliseconds] = useState<string>("");

  const [dateString, setDateString] = useState<string>("");
  const [convertedSeconds, setConvertedSeconds] = useState<number>(0);
  const [convertedMilliseconds, setConvertedMilliseconds] = useState<number>(0);

  useEffect(() => {
    const updateTime = () => {
      setCurrentMilliseconds(Date.now());
      setCurrentSeconds(Math.floor(Date.now() / 1000));
      setCurrentDate(new Date());
    };

    updateTime(); // Initial update

    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  useEffect(() => {
    if (!isNaN(parseFloat(inputValue)) && inputValue.trim() !== "") {
      const numInput = parseFloat(inputValue);
      setDateFromSeconds(new Date(numInput * 1000).toString());
      setDateFromMilliseconds(new Date(numInput).toString());
    } else {
      setDateFromSeconds("");
      setDateFromMilliseconds("");
    }
  }, [inputValue]);

  useEffect(() => {
    const date = new Date(dateString);
    setConvertedSeconds(Math.floor(date.getTime() / 1000));
    setConvertedMilliseconds(date.getTime());
  }, [dateString]);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setIconStates((prevState) => ({
      ...prevState,
      [key]: faCheck,
    }));

    // Revert to faCopy after 1 second
    setTimeout(() => {
      setIconStates((prevState) => ({
        ...prevState,
        [key]: faCopy,
      }));
    }, 1000);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center underline">
        Date and Time Utilities
      </h2>

      {/* Current Date/Time */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-700">
          Current Date/Time
        </h3>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {/* Milliseconds */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center border shadow-sm border-slate-300 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-4/5">
              <span className="text-base font-medium text-gray-800">
                {currentMilliseconds}
              </span>
              <button
                onClick={() => copyToClipboard(currentMilliseconds.toString(), "milliseconds")}
                className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                title="Copy contents"
              >
                <FontAwesomeIcon icon={iconStates.milliseconds} />
              </button>
            </div>
            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
              Milliseconds
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center border shadow-sm border-slate-300 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-4/5">
              <span className="text-base font-medium text-gray-800">
                {currentSeconds}
              </span>
              <button
                onClick={() => copyToClipboard(currentSeconds.toString(), "seconds")}
                className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                title="Copy contents"
              >
                <FontAwesomeIcon icon={iconStates.seconds} />
              </button>
            </div>
            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
              Seconds
            </span>
          </div>

          {/* Date */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center border shadow-sm border-slate-300 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-4/5">
              <span className="text-base font-medium text-gray-800">
                {currentDate.toDateString()}
              </span>
              <button
                onClick={() => copyToClipboard(currentDate.toDateString(), "date")}
                className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                title="Copy contents"
              >
                <FontAwesomeIcon icon={iconStates.date} />
              </button>
            </div>
            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
              Date
            </span>
          </div>

          {/* Time */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center border shadow-sm border-slate-300 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-4/5">
              <span className="text-base font-medium text-gray-800">
                {currentDate.toTimeString()}
              </span>
              <button
                onClick={() => copyToClipboard(currentDate.toTimeString(), "time")}
                className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                title="Copy contents"
              >
                <FontAwesomeIcon icon={iconStates.time} />
              </button>
            </div>
            <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
              Time
            </span>
          </div>
        </div>
      </div>

      {/* Convert from seconds/milliseconds */}
      <div className="mb-8">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-700">
            Convert from Seconds/Milliseconds
          </h3>
          <div className="flex items-center mb-4">
            <input
              type="number"
              className="border p-3 rounded-md flex-grow"
              placeholder="Enter seconds or milliseconds"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          {inputValue && (
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex items-center border shadow-sm bg-gray-100 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-5/6">
                  <span className="text-base font-medium text-gray-800">
                    {dateFromSeconds}
                  </span>
                  <button
                    onClick={() => copyToClipboard(dateFromSeconds.toString(), 'dateFromSeconds')}
                    className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                    title="Copy contents"
                  >
                    <FontAwesomeIcon icon={iconStates.dateFromSeconds} />
                  </button>
                </div>
                <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
                  Date from Seconds
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="flex items-center border shadow-sm bg-gray-100 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-5/6">
                  <span className="text-base font-medium text-gray-800">
                    {dateFromMilliseconds}
                  </span>
                  <button
                    onClick={() => copyToClipboard(dateFromMilliseconds.toString(), 'dateFromMilliseconds')}
                    className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 px-4 py-2 rounded text-center text-indigo-700 w-10"
                    title="Copy contents"
                  >
                    <FontAwesomeIcon icon={iconStates.dateFromMilliseconds} />
                  </button>
                </div>
                <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
                  Date from Milliseconds
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Convert from strings */}
      <div className="mb-8">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-700">
            Convert from Strings
          </h3>
          <div className="flex items-center mb-4">
            <input
              type="text"
              className="border p-3 rounded-md flex-grow"
              placeholder="Enter ISO 8601 string"
              value={dateString}
              onChange={(e) => setDateString(e.target.value)}
            />
          </div>
          {dateString && (
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex items-center border shadow-sm bg-gray-100 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-5/6">
                  <span id="converted-seconds">{convertedSeconds}</span>
                  <button
                    onClick={() => copyToClipboard(convertedSeconds.toString(), 'convertedSeconds')}
                    className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 leading-4 px-2.5 py-2 rounded text-center text-indigo-700 w-10"
                    title="Copy contents"
                  >
                    <FontAwesomeIcon icon={iconStates.convertedSeconds} />
                  </button>
                </div>
                <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
                  Seconds
                </span>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="flex items-center border shadow-sm bg-gray-100 focus-within:border focus-within:border-indigo-500 focus-within:ring-indigo-500 focus:outline-none justify-between relative ring-1 ring-transparent rounded p-2 w-5/6">
                  <span id="converted-milliseconds">
                    {convertedMilliseconds}
                  </span>
                  <button
                    onClick={() => copyToClipboard(convertedMilliseconds.toString(), 'convertedMilliseconds')}
                    className="hover:text-indigo-600 bg-slate-200 hover:bg-slate-300 leading-4 px-2.5 py-2 rounded text-center text-indigo-700 w-10"
                    title="Copy contents"
                  >
                    <FontAwesomeIcon icon={iconStates.convertedMilliseconds} />
                  </button>
                </div>
                <span className="mt-2 md:mt-0 md:ml-4 text-center md:text-left">
                  Milliseconds
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateTimeUtilities;
