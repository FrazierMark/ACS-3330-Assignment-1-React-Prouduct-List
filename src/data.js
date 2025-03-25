import data from './data.json';

// 1.1
export const categories = data.map((item) => item.category);

// 1.2
export const uniqueCategories = [...new Set(data.map((item) => item.category))];

// 1.3
export const categoryCount = data.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1;
  return acc;
}, {});

// 1.4
export const categoryList = Object.entries(data.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1;
  return acc;
}, {})).map(([name, count]) => ({
  name,
  count
}));

