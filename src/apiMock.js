export const fetchData = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require('./data.json'));
    }, time)
  })
}