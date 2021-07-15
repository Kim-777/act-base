// axios script가 잘 로드 되었는지 확인
console.log("axios : ", axios); 

const USER_SERVER = '/api/users';
const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/'
const API_KEY = '5d1ab224851bcfbb2b7953c93f7abcc7';


axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => console.log(response));

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done"), 1000);
// })



// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`${src}를 불러오는 도중에 에러가 발생했습니다.`));
//     document.head.append(script);
// }

// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => resolve(script);
//         script.onerror = () => reject(new Error(`${src}를 불러오는 도중 에러 발생`));
//         document.head.append(script);
//     })
// }


// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms);
//     })
// }
// delay(3000).then(() => console.log(`3초후 실행`));



// 프라미스 체이닝
// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 2;
// }).then((result) => {
//     console.log(result);
//     return result * 2;
// })


// 프라미스 반환하기
new Promise(function(resolve, reject) {
    setTimeout(() => resolve(2), 1000);
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2 ), 1000);
    })
}).then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000)
    })
}).then((result) => {
    console.log(result);
})