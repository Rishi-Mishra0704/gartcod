export const calculateTimeToEvent = () => {
    const eventDate = new Date("2024-01-30T23:59:00-07:00"); // January 31, 2024, 11:59 PM PT
    const currentDate = new Date();
    const timeRemaining = eventDate.getTime() - currentDate.getTime();
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  };