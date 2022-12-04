import { useState, useEffect } from "react";

export const useCountdown = (targetDate) => {
  const countDownDate = Date.parse(targetDate);

  const [countDown, setCountDown] = useState(
    Math.abs(countDownDate - Date.now())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(Math.abs(countDownDate - Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [
    days.toString().length === 1 ? "0" + days : days,
    hours.toString().length === 1 ? "0" + hours : hours,
    minutes.toString().length === 1 ? "0" + minutes : minutes,
    seconds.toString().length === 1 ? "0" + seconds : seconds,
  ];
};
