const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }}&lon=${ lng }&appid=a71cb826579e82da4c2b31d03efd1019&unit=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}