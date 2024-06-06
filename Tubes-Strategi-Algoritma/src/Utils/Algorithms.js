// algorithms.js

// Greedy Algorithm
export const greedy = (data) => {
  let shortestTime = Infinity;
  let fastestPace = Infinity;
  let optimalEntry = null;

  data.forEach((entry) => {
      const time = parseFloat(entry.duration);
      const distance = parseFloat(entry.distance);
    
      // Validasi untuk menghindari perhitungan yang salah
      if (isNaN(time) || isNaN(distance) || time <= 0 || distance <= 0) {
          return;
      }

      const pace = distance / time;

      if (time < shortestTime || (time === shortestTime && pace < fastestPace)) {
          shortestTime = time;
          fastestPace = pace;
          optimalEntry = entry;
      }
  });

  return optimalEntry;
};

// Brute Force Algorithm
export const bruteForce = (data) => {
  let shortestTime = Infinity;
  let optimalEntry = null;

  data.forEach((entry1) => {
      data.forEach((entry2) => {
          if (entry1 === entry2) return;

          const time1 = parseFloat(entry1.duration);
          const time2 = parseFloat(entry2.duration);
          
          // Validasi untuk menghindari perhitungan yang salah
          if (isNaN(time1) || isNaN(time2) || time1 <= 0 || time2 <= 0) {
              return;
          }

          const totalTime = time1 + time2;

          if (totalTime < shortestTime) {
              shortestTime = totalTime;
              optimalEntry = {
                  shelters: [entry1.shelter, entry2.shelter],
                  totalTime: totalTime,
                  totalDistance: parseFloat(entry1.distance) + parseFloat(entry2.distance)
              };
          }
      });
  });

  return optimalEntry;
};