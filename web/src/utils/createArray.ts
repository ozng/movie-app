type CreateArrayForPaginationType = (length?: number) => string[];

export const createArrayForPagination: CreateArrayForPaginationType = (
  length = 1
) => {
  const array = [];

  for (let i = 1; i <= length; i++) {
    array.push(i.toString());
  }

  return array;
};
