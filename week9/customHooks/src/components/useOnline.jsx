import { useEffect, useState } from "react";

export default function useOnline() {
  const [isOnline, setIsOnline] = useState(window.navigator.online);

  useEffect(() => {
    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));
  }, []);

  return isOnline;
}
