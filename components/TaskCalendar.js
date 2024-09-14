"use client";
import React, { useState } from "react";

const MonthCalendar = ({ year, month, completedDays, onDayClick }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="month-calendar ">
      <h4 className="text-sm font-semibold mb-2">
        {monthNames[month]} {year}
      </h4>
      <div className="grid grid-cols-7 gap-0.5">
        {[...Array(firstDayOfMonth)].map((_, index) => (
          <div key={`empty-${index}`} className="w-4 h-4" />
        ))}
        {days.map((day) => {
          const date = new Date(year, month, day);
          const dateString = date.toISOString().split("T")[0];
          return (
            <div
              key={dateString}
              className={`w-4 h-4 rounded-sm flex items-center justify-center text-[0.5rem] cursor-pointer ${
                completedDays.includes(dateString)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
              title={date.toDateString()}
              onClick={() => onDayClick(dateString)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TaskCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [completedDays, setCompletedDays] = useState([]);

  const prevMonths = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, 1)
    );
  };

  const nextMonths = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, 1)
    );
  };

  const getMonthData = (offset) => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + offset,
      1
    );
    return { year: date.getFullYear(), month: date.getMonth() };
  };

  const handleDayClick = (dateString) => {
    setCompletedDays((prevCompletedDays) => {
      if (prevCompletedDays.includes(dateString)) {
        return prevCompletedDays.filter((date) => date !== dateString);
      } else {
        return [...prevCompletedDays, dateString];
      }
    });
  };

  return (
    <div className="task-calendar p-4 bg-white rounded-lg shadow w-[70%]">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonths} className="px-2 py-1 bg-gray-200 rounded">
          Prev
        </button>
        <h3 className="text-lg font-semibold">Task Calendar</h3>
        <button onClick={nextMonths} className="px-2 py-1 bg-gray-200 rounded">
          Next
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MonthCalendar
          {...getMonthData(-1)}
          completedDays={completedDays}
          onDayClick={handleDayClick}
        />
        <MonthCalendar
          {...getMonthData(0)}
          completedDays={completedDays}
          onDayClick={handleDayClick}
        />
        <MonthCalendar
          {...getMonthData(1)}
          completedDays={completedDays}
          onDayClick={handleDayClick}
        />
      </div>
    </div>
  );
};

export default TaskCalendar;
