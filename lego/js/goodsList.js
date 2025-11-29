var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1}</span>`;
        }
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
})

//  热卖畅销
let bookArr = [
    { img: '../images/goodsListImg/bookNo1.png', details: '《三体》刘慈欣一场科幻的史诗风暴' },
    { img: '../images/goodsListImg/bookNo2.jpg', details: '从你的世界路过入选央视“2014中国好书”的80后作品！十年华语畅销小说，王家卫陈国富倾力推荐，1500万次转发，超4亿次阅读' },
    { img: '../images/goodsListImg/bookNo3.jpg', details: '《大清相国》以陈廷敬为原型，讲述其在康熙朝历经官场沉浮，凭借清廉品格、智慧谋略坚守为官底线，整顿吏治、体恤民生的传奇历程，展现清代官场的风云变幻与为官之道' },
    { img: '../images/goodsListImg/bookNo4.jpg', details: '《白夜行》是东野圭吾的经典悬疑小说，以桐原亮司与唐泽雪穗跨越十九年的共生关系为主线，串联起多起悬疑案件，在黑暗压抑的基调中探讨人性、欲望与救赎，情节紧凑且后劲十足' },
    { img: '../images/goodsListImg/bookNo5.jpg', details: '《偷影子的人》是一本关于人性的书籍，主要介绍了人性中偷影子的概念和应用。该书由美国心理学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括偷影子的基本概念、偷影子的应用、偷影子的实验和偷影子的未来发展等' },
    { img: '../images/goodsListImg/bookNo6.jpg', details: '《金融炼金术》是一本关于金融的书籍，主要介绍了金融中炼金术的概念和应用。该书由美国金融学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括金融炼金术的基本概念、金融炼金术的应用、金融炼金术的实验和金融炼金术的未来发展等' },
    { img: '../images/goodsListImg/bookNo7.jpg', details: '《百年孤独》是一本关于历史的书籍，主要介绍了历史中百年孤独的概念和应用。该书由美国历史学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括百年孤独的基本概念、百年孤独的应用、百年孤独的实验和百年孤独的未来发展等' }
]
let headerBannerRightDom = document.querySelector('.headerBannerRight')
bookArr.forEach((item, index) => {
    headerBannerRightDom.innerHTML += `
        <div class="bookNum bookNo${index + 1}">
            <img src="${item.img}" alt="">
            <p>${item.details}</p>
            <span>${index + 1}</span>
        </div>
    `
})
let bookNumDoms = document.querySelectorAll('.bookNum');
let bookNumImgDoms = document.querySelectorAll('.bookNum>img');
bookNumDoms.forEach((item,index) => {
    item.style.height = '42px';
    bookNumImgDoms[index].style.margin = '0px 0';
})
bookNumDoms[0].style.height = '141px';
bookNumImgDoms[0].style.margin = '20px 0';
bookNumDoms.forEach((item,index) => {
    item.addEventListener('mouseover', () => {
        bookNumDoms.forEach((item) => {
            item.style.height = '42px';
            bookNumImgDoms[index].style.margin = '0px 0';
        })
        item.style.height = '141px';
        bookNumImgDoms[index].style.margin = '20px 0';
    })
})
//  图书折扣
let bookDiscountArr = [
    {bookImg:'../images/goodsListImg/bookNo4.jpg',tagImg:'../images/goodsListImg/tag01.png',bookName:'白夜行&nbsp;&nbsp;&nbsp;&nbsp;东野上吾',bookPrice:'¥&nbsp;:&nbsp;38',bookDiscountPrice:'¥&nbsp;:&nbsp;58'},
    {bookImg:'../images/goodsListImg/bookNo5.jpg',tagImg:'../images/goodsListImg/tag02.png',bookName:'白夜行&nbsp;&nbsp;&nbsp;&nbsp;东野上吾',bookPrice:'¥&nbsp;:&nbsp;38',bookDiscountPrice:'¥&nbsp;:&nbsp;58'},
    ]
let bookDiscountListDom = document.querySelector('.bookDiscountList');
for(let i=0;i<10;i++){
    let num = 1;
    if(i<5){
        num = 0;
    }
    bookDiscountListDom.innerHTML +=`
        <div class="bookDiscountItem">
            <img src="${bookDiscountArr[num].bookImg}" alt="" class="bookDiscountItemBookImg">
            <img src="${bookDiscountArr[num].tagImg}" alt="">
            <p>${bookDiscountArr[num].bookName}</p>
            <div>
                <span>推荐：</span>
                <img src="../images/goodsListImg/start.png" alt="">
            </div>
            <span>${bookDiscountArr[num].bookPrice}</span>
            <del>${bookDiscountArr[num].bookDiscountPrice}</del>
        </div>
    `
}
let bookDiscountItemDoms = document.querySelectorAll('.bookDiscountItem');
let bookDiscountDelDoms = document.querySelectorAll('.bookDiscountItem>del');
bookDiscountDelDoms.forEach((item)=>{
    item.style.display = 'none';
})
bookDiscountItemDoms.forEach((item,index) => {
    item.addEventListener('mouseover', () => {
        bookDiscountDelDoms[index].style.display = 'inline';
    })
    item.addEventListener('mouseout', () => {
        bookDiscountDelDoms[index].style.display = 'none';
    })
})
// 新书上架
let newBookArr = [
        {img:'../images/goodsListImg/newBook01.jpg',author:'查理&nbsp;&nbsp;&nbsp;&nbsp;斯密斯',press:'中国邮电出版社',price:'￥49',discountPrice:'￥79'},
        {img:'../images/goodsListImg/newBook02.jpg',author:'查理&nbsp;&nbsp;&nbsp;&nbsp;斯密斯',press:'中国邮电出版社',price:'￥49',discountPrice:'￥79'},
    ]
let newBookListDom = document.querySelector('.newBookList');
for(let i=0;i<10;i++){
    let num = 1;
    if(i<5){
        num = 0;
    }
    newBookListDom.innerHTML +=`
        <div class="newBookItem">
            <img src="${newBookArr[num].img}" alt="">
            <p class="author">${newBookArr[num].author}</p>
            <p class="press">${newBookArr[num].press}</p>
            <span>${newBookArr[num].price}</span><del>${newBookArr[num].discountPrice}</del>
        </div>
    `
}
let recommendBookArr = [
    {name:'《从你的全世界路过》',img:'../images/indexImg/book03.jpg',details:'从你的世界路过入选央视“2014中国好书”的80后作品！十年华语畅销小说，王家卫陈国富倾力推荐，1500万次转发，超4亿次阅读'},
    {name:'《大清相国》',img:'../images/indexImg/book04.jpg',details:'《大清相国》以陈廷敬为原型，讲述其在康熙朝历经官场沉浮，凭借清廉品格、智慧谋略坚守为官底线，整顿吏治、体恤民生的传奇历程，展现清代官场的风云变幻与为官之道'},
    {name:'《白夜行》',img:'../images/indexImg/book05.jpg',details:'《白夜行》是东野圭吾的经典悬疑小说，以桐原亮司与唐泽雪穗跨越十九年的共生关系为主线，串联起多起悬疑案件，在黑暗压抑的基调中探讨人性、欲望与救赎，情节紧凑且后劲十足'},
    {name:'《心理博弈术》',img:'../images/indexImg/book06.jpg',details:'《心理博弈术》是一本关于心理学的书籍，主要介绍了心理学中博弈论的概念和应用。该书由美国心理学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括博弈论的基本概念、博弈论的应用、博弈论的实验和博弈论的未来发展等'},
    {name:'《偷影子的人》',img:'../images/indexImg/book07.jpg',details:'《偷影子的人》是一本关于人性的书籍，主要介绍了人性中偷影子的概念和应用。该书由美国心理学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括偷影子的基本概念、偷影子的应用、偷影子的实验和偷影子的未来发展等'},
    {name:'《金融炼金术》',img:'../images/indexImg/book08.jpg',details:'《金融炼金术》是一本关于金融的书籍，主要介绍了金融中炼金术的概念和应用。该书由美国金融学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括金融炼金术的基本概念、金融炼金术的应用、金融炼金术的实验和金融炼金术的未来发展等'},
    {name:'《百年孤独》',img:'../images/indexImg/book09.jpg',details:'《百年孤独》是一本关于历史的书籍，主要介绍了历史中百年孤独的概念和应用。该书由美国历史学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括百年孤独的基本概念、百年孤独的应用、百年孤独的实验和百年孤独的未来发展等'}
]
let newBookRightDom = document.querySelector('.newBookRight');
recommendBookArr.forEach((item,index)=>{
newBookRightDom.innerHTML += `
    <div class="recommendBookNo${index+1} recommendBookNum">
        <span>${index+1}</span>
        <div class="recommendBookDetailsBox">
            <img src="${item.img}" alt="">
            <p>${item.details}</p>
        </div>
        <p>${item.name}</p>
    </div>
`;
})
let recommendBookNumDoms = document.querySelectorAll('.recommendBookNum');
let recommendBookDetailsBoxDoms = document.querySelectorAll('.recommendBookDetailsBox');
let recommendBookDetailsBoxPDoms = document.querySelectorAll('.recommendBookNum>p');
recommendBookDetailsBoxDoms.forEach((item) => {
    item.style.display = 'none';
})
recommendBookDetailsBoxPDoms.forEach((item) => {
    item.style.display = 'block';
})
recommendBookDetailsBoxDoms[0].style.display = 'flex';
recommendBookDetailsBoxPDoms[0].style.display = 'none';
recommendBookNumDoms.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        recommendBookDetailsBoxDoms.forEach((item) => {
            item.style.display = 'none';
        })
        recommendBookDetailsBoxDoms[index].style.display = 'flex';
        recommendBookDetailsBoxPDoms.forEach((item) => {
            item.style.display = 'block';
        })
        recommendBookDetailsBoxPDoms[index].style.display = 'none';
    })
})
// 独家提供
let exclusiveArr = [
        {img:'../images/goodsListImg/exclusive01.jpg',author:'查理&nbsp;&nbsp;&nbsp;&nbsp;斯密斯',press:'中国邮电出版社',price:'￥49',discountPrice:'￥79'},
        {img:'../images/goodsListImg/exclusive02.jpg',author:'查理&nbsp;&nbsp;&nbsp;&nbsp;斯密斯',press:'中国邮电出版社',price:'￥49',discountPrice:'￥79'},
    ]
let exclusiveDom = document.querySelector('.exclusiveBookList');
for(let i=0;i<12;i++){
    let num = 1;
    if(i<6){
        num = 0;
    }
    exclusiveDom.innerHTML +=`
        <div class="exclusiveBookListItem bookPublicItem">
            <img src="${exclusiveArr[num].img}" alt="">
            <p class="author">${exclusiveArr[num].author}</p>
            <p class="press">${exclusiveArr[num].press}</p>
            <span>${exclusiveArr[num].price}</span><del>${exclusiveArr[num].discountPrice}</del>
        </div>
    `
}
let exclusiveBookTitleListDoms = document.querySelectorAll('.exclusiveBookTitle>div>p');
exclusiveBookTitleListDoms.forEach((item)=>{
    item.classList.remove('exclusiveBookTitleActived');
    item.addEventListener('click',()=>{
        exclusiveBookTitleListDoms.forEach((item)=>{
            item.classList.remove('exclusiveBookTitleActived');
        })
        item.classList.add('exclusiveBookTitleActived');
    })
})
exclusiveBookTitleListDoms[0].classList.add('exclusiveBookTitleActived');
let exclusiveBookIndexDoms = document.querySelectorAll('.exclusiveBookIndex>p');
let exclusiveBookArrowLeftDom = document.querySelector('.arrowLeft');
let exclusiveBookArrowRightDom = document.querySelector('.arrowRight');
let exclusiveBookIndex = 0;
exclusiveBookIndexDoms[exclusiveBookIndex].classList.add('exclusiveBookIndexActived');
exclusiveBookArrowLeftDom.addEventListener('click',()=>{
    exclusiveBookIndex--;
    if(exclusiveBookIndex<0){
        exclusiveBookIndex = exclusiveBookIndexDoms.length-1;
    }
    exclusiveBookIndexDoms.forEach((item)=>{
        item.classList.remove('exclusiveBookIndexActived');
    })
    exclusiveBookIndexDoms[exclusiveBookIndex].classList.add('exclusiveBookIndexActived');
})
exclusiveBookArrowRightDom.addEventListener('click',()=>{
    exclusiveBookIndex++;
    if(exclusiveBookIndex>exclusiveBookIndexDoms.length-1){
        exclusiveBookIndex = 0;
    }
    exclusiveBookIndexDoms.forEach((item)=>{
        item.classList.remove('exclusiveBookIndexActived');
    })
    exclusiveBookIndexDoms[exclusiveBookIndex].classList.add('exclusiveBookIndexActived');
})
// 猜你喜欢
let guessULikeArr = [
        {img:'../images/goodsListImg/guessULike01.jpg',author:'查理&nbsp;&nbsp;&nbsp;&nbsp;斯密斯',press:'中国邮电出版社',price:'￥49',discountPrice:'￥79'},
        {img:'../images/goodsListImg/guessULike02.jpg',author:'查理&nbsp;&nbsp;&nbsp;&nbsp;斯密斯',press:'中国邮电出版社',price:'￥49',discountPrice:'￥79'},
    ]
let guessULikeDom = document.querySelector('.guessULikeList');
for(let i=0;i<12;i++){
    let num = 1;
    if(i<6){
        num = 0;
    }
    guessULikeDom.innerHTML +=`
        <div class="guessULikeBookListItem bookPublicItem">
            <img src="${guessULikeArr[num].img}" alt="">
            <p class="author">${guessULikeArr[num].author}</p>
            <p class="press">${guessULikeArr[num].press}</p>
            <span>${guessULikeArr[num].price}</span><del>${guessULikeArr[num].discountPrice}</del>
        </div>
    `
}