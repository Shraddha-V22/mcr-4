export const postedTime = (postTime) => {
  const createdAt = new Date(postTime);
  const now = new Date();
  const timeInMS = Math.floor(now - createdAt);
  const sec = Math.floor(timeInMS / 1000);
  if (sec > 59) {
    const min = Math.floor(sec / 60);
    if (min > 59) {
      const hours = Math.floor(min / 60);
      if (hours > 24) {
        const days = Math.floor(hours / 24);
        if (days > 7) {
          const weeks = Math.floor(days / 7);
          if (weeks > 4) {
            const months = Math.floor(days / 30);
            if (months > 12) {
              return createdAt.toLocaleTimeString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
            } else {
              return `${months}w ago`;
            }
          } else {
            return `${weeks}w ago`;
          }
        } else {
          return `${days}d ago`;
        }
      } else {
        return `${hours}hrs ago`;
      }
    } else {
      return `${59}min ago`;
    }
  } else {
    return `${sec} seconds ago`;
  }
};
