export const formatSelectValue = (value) => {
  return value?.label ?? "";
};

export const formatMultiSelect = (items) => {
  if (!Array.isArray(items)) return "";

  return items
    .map((item) => item.label)
    .join(", ");
};

export const formatArray = (items) => {
  if (!Array.isArray(items)) return "";

  return items.join(", ");
};