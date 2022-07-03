// Orders array of objects by a property in ascending order
export const sortByProperty = (property: string) => {
  return (a: any, b: any) => {
    return a[property] > b[property] ? 1 : -1
  }
}
