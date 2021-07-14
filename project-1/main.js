const articleWidth = 399;
const cardsBox = document.querySelector('.cards-box');
const cards = Array.from(document.querySelectorAll('.card'));
let cardsLength = cards.length;
const tabNextButton = document.querySelector('.tab-arrow-right');
const tabPrevButton = document.querySelector('.tab-arrow-left');
const cardPagenation = document.querySelector('.card-pagenation');
let currentSlideIndex = 0;
const headerList = document.querySelectorAll('.header-list');


for(let list of headerList) {
    list.addEventListener('mouseover', () => {
        console.log(list.children[1].classList.add('show'));
    })

    list.addEventListener('mouseout', () => {
        console.log(list.children[1].classList.remove('show'));
    })
}

console.log(headerList);


cardsBox.style.transform = `translateX(-${articleWidth}px)`;
console.log(cardsBox.style.left);

function makeClone() {
    for (let i =0; i < cards.length; i++) {
        cardsBox.append(cards[i].cloneNode(true));
    }
    cardsBox.prepend(cards[cards.length - 1].cloneNode(true));
}


function moveCard(index) {
    if(!cardsBox.classList.contains('animated')) cardsBox.classList.add('animated');
    cardsBox.style.left =  -index*articleWidth + 'px';
    setTimeout(() => {
        indexCheck(index);
    }, 500);
}

function indexCheck(index) {    
    if(index > 0 && index < cardsLength) return;

    cardsBox.classList.remove('animated');

    if(index < 0) {
        cardsBox.style.left = (-1)*(cardsLength-1)*articleWidth+'px';
        currentSlideIndex = cardsLength-1;
    }

    if(index === cardsLength) {
        currentSlideIndex = 0;
        cardsBox.style.left = 0  + 'px';
    }
}





// 함수 호출 부분
makeClone();



// event 등록
tabPrevButton.addEventListener('click', () => {
    moveCard(--currentSlideIndex);
})
tabNextButton.addEventListener('click', () => {
    moveCard(++currentSlideIndex);
})