// Category mapping for display names
export const categoryMap = {
  all: 'All Services',
  manicure: 'Manicure Services',
  pedicure: 'Pedicure Services',
  combo: 'Manicure & Pedicure Combos',
  'artificial-nails': 'Artificial Nails',
  'nail-enhancements': 'Nail Enhancements',
  removal: 'Removal Services',
  waxing: 'Waxing Services',
  massage: 'Body Massage',
  eyelash: 'Eyelash Services',
};

// Get an array of category objects for UI use
export const getCategoryOptions = () => {
  return Object.entries(categoryMap).map(([value, label]) => ({
    value,
    label,
  }));
};
