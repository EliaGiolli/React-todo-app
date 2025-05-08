import { useState } from "react";

export function useTimedMessage(duration = 3000) {
  const [visible, setVisible] = useState(false);

  const triggerMessage = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), duration);
  };

  return [visible, triggerMessage];
}
