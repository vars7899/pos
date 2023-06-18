import { useEffect, useState } from "react";

export const useTimer = (givenSeconds: number) => {
  const [seconds, setSeconds] = useState<number>(Math.trunc(givenSeconds));
  const [expired, setExpired] = useState<boolean>(() => (givenSeconds <= 0 ? true : false));

  useEffect(() => {
    let interval: any = null;
    if (expired !== true) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 0) setExpired(true);
          else return prev - 1;
          return 0;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, []);

  return {
    seconds,
    minutes: `${Math.floor(seconds / 60) <= 9 ? "0" + Math.floor(seconds / 60) : Math.floor(seconds / 60)} : ${
      seconds - Math.floor(seconds / 60) * 60 <= 9
        ? "0" + (seconds - Math.floor(seconds / 60) * 60)
        : seconds - Math.floor(seconds / 60) * 60
    }`,
    expired,
  };
};
