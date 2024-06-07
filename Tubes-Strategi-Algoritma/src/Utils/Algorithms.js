// Brute Force Algorithm
export const bruteForce = (data) => {
  let bestDensity = -Infinity;
  let bestShelterByDensity = null;

  // Hitung total density untuk setiap shelter
  const shelters = data.reduce((acc, entry) => {
    if (!acc[entry.shelter]) {
      acc[entry.shelter] = { totalDistance: 0, totalDuration: 0, count: 0 };
    }
    acc[entry.shelter].totalDistance += entry.distance;
    acc[entry.shelter].totalDuration += entry.duration;
    acc[entry.shelter].count++;
    return acc;
  }, {});

  // Temukan shelter dengan density terbaik
  Object.entries(shelters).forEach(([shelter, { totalDistance, totalDuration, count }]) => {
    const density = totalDistance / totalDuration;
    if (density > bestDensity) {
      bestDensity = density;
      bestShelterByDensity = shelter;
    }
  });

  return { bestShelterByDensity };
};

// Greedy Algorithm
export const greedy = (data) => {
  let bestWeight = Infinity;
  let bestProfit = Infinity;
  let bestDensity = -Infinity;
  let bestShelterByWeight = null;
  let bestShelterByProfit = null;
  let bestShelterByDensity = null;

  // Hitung total weight, profit, dan density untuk setiap shelter
  const shelters = data.reduce((acc, entry) => {
    if (!acc[entry.shelter]) {
      acc[entry.shelter] = { totalDistance: 0, totalDuration: 0, count: 0 };
    }
    acc[entry.shelter].totalDistance += entry.distance;
    acc[entry.shelter].totalDuration += entry.duration;
    acc[entry.shelter].count++;
    return acc;
  }, {});

  // Temukan shelter dengan weight, profit, dan density terbaik
  Object.entries(shelters).forEach(([shelter, { totalDistance, totalDuration, count }]) => {
    const weight = totalDistance;
    const profit = totalDuration;
    const density = totalDistance / totalDuration;

    if (weight < bestWeight) {
      bestWeight = weight;
      bestShelterByWeight = shelter;
    }
    if (profit < bestProfit) {
      bestProfit = profit;
      bestShelterByProfit = shelter;
    }
    if (density > bestDensity) {
      bestDensity = density;
      bestShelterByDensity = shelter;
    }
  });

  return { bestShelterByWeight, bestShelterByProfit, bestShelterByDensity };
};
