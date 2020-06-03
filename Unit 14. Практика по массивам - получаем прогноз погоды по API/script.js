fetch(`https://api.openweathermap.org/data/2.5/weather?id=703448&lang=	ru&appid=9252887561af6e18df7451d0cd9c6e84`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.country_name').innerHTML = data.sys.country;
        document.querySelector('.city_name').innerHTML = data.name;
        document.querySelector('.description p').innerHTML = data.weather[0]['description'];
        document.querySelector('.min-temp').innerHTML = `${Math.floor(data.main.temp_min - 273)} &deg`;
        document.querySelector('.max-temp').innerHTML = `${Math.floor(data.main.temp_max - 273)} &deg`;
        document.querySelector('.humidity p').innerHTML = `${data.main.humidity}%`;
        document.querySelector('.clouds').innerHTML = `<img src ='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
        document.querySelector('.wind p').innerHTML = `${data.wind.speed} м/с`;
        var myDate = new Date(data.dt * 1000);
        console.log(myDate.toGMTString());
        console.log(myDate.toLocaleString());
    })
    .catch(function () {

    })

function waether() {
    let id = document.querySelector('.s-1').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&lang=ru&appid=9252887561af6e18df7451d0cd9c6e84`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector('.country_name').innerHTML = data.sys.country;
            document.querySelector('.city_name').innerHTML = data.name;
            document.querySelector('.description p').innerHTML = data.weather[0]['description'];
            document.querySelector('.min-temp').innerHTML = `${Math.floor(data.main.temp_min - 273)} &deg`;
            document.querySelector('.max-temp').innerHTML = `${Math.floor(data.main.temp_max - 273)} &deg`;
            document.querySelector('.humidity p').innerHTML = `${data.main.humidity}%`;
            document.querySelector('.clouds').innerHTML = `<img src ='https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`;
            document.querySelector('.wind p').innerHTML = `${data.wind.speed} м/с`;
        })
        .catch(function () {

        })
}


document.querySelector('.s-1').onchange = waether;
let date = document.querySelector('.i-date');

