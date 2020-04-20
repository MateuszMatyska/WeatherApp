export const getWeather = () => {
    return new Promise((resolve, reject) => {
    fetch('https://danepubliczne.imgw.pl/api/data/synop')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
         resolve(json);
    })
    .catch((error) => {reject(error)});
})}