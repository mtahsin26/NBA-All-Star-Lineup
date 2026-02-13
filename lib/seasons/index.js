// Season registry — import each year's data file here.
// To add a new season: import it and add it to the `seasons` map.

import data2026 from './2026.json';

export const seasons = {
  2026: data2026,
};

export const availableYears = Object.keys(seasons).map(Number).sort();
