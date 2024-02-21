import { useEffect } from "react";

export default function useInterval(callback, delay) {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);

    return () => clearInterval(intervalId);
  }, [callback, delay]);
}
