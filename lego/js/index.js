// *********************************************************************************************
// 顶部搜索栏
let topSearchDom = document.querySelector('.topSearch');
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    if (scrollY < 500 ) {
        topSearchDom.style.height = 0 + 'px';
    } else {
        topSearchDom.style.height = 50 + 'px';
    }
})
let searchInputDom = document.querySelector('.searchBox>input');
let topSearchInputDom = document.querySelector('.topSearchInput');
searchInputDom.addEventListener('input',()=>{
    topSearchInputDom.value = searchInputDom.value;
    console.log(topSearchInputDom.value,searchInputDom.value);
})
topSearchInputDom.addEventListener('input',()=>{
    searchInputDom.value = topSearchInputDom.value;
})

// 头部轮播图
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
        delay: 1000,
        disableOnInteraction: false,
    }
})

// ******************************************************************************************************
// 乐购·今日推荐
// innerHTML数据
let recommendArr = [
    {img1:'../images/indexImg/recommend01.jpg',img2:'../images/indexImg/recommendLimitTime.jpg',p1:"小熊家用静音加湿器",p2:'外观唯美 微米级喷雾',price:'¥：89'},
    {img1:'../images/indexImg/recommend02.jpg',img2:'../images/indexImg/recommendLimitTime.jpg',p1:"小熊家用静音加湿器",p2:'外观唯美 微米级喷雾',price:'¥：89'}
]
let recommendTableTrDoms = document.querySelectorAll('.recommend tr');
recommendTableTrDoms.forEach((item,index)=>{
    for(let i=0;i<6;i++){
        item.innerHTML += `
            <td class="recommendGoodsItem">
                <img src="${recommendArr[index].img1}" alt="" class="productImg">
                <img src="${recommendArr[index].img2}" alt="" class="limitTime">
                <p>${recommendArr[index].p1}</p>
                <p>${recommendArr[index].p2}</p>
                <span>${recommendArr[index].price}</span>
            </td>
        `;
    }
})
// 页面跳转
let recommendGoodsItemDoms = document.querySelectorAll('.recommendGoodsItem');
recommendGoodsItemDoms.forEach((item)=>{
    item.addEventListener('click',()=>{
        window.location.href = './goodsInfo.html';
    })
})




// *********************************************************************************************
// menu模块
let menuBoxDoms = document.querySelectorAll('.menuBox');
let menuBoxPDoms = document.querySelectorAll('.menuBox p');
let menuBoxDivDoms = document.querySelectorAll('.menuBox div');
menuBoxDivDoms.forEach((item) => {
    item.style.display = 'none';
})
menuBoxDoms.forEach((item, index) => {
    // 鼠标移入父盒子
    item.addEventListener('mouseover', () => {
        menuBoxPDoms.forEach((item) => {
            item.classList.remove('menuBoxActived');
        })
        menuBoxPDoms[index].classList.add('menuBoxActived');
        // 隐藏所有
        menuBoxDivDoms.forEach((item) => {
            item.style.display = 'none';
        })
        // 显示指定盒子
        menuBoxDivDoms[index].style.display = 'block';
    })
    // 鼠标移出父盒子
    item.addEventListener('mouseleave', () => {
        // 移除效果
        menuBoxPDoms[index].classList.remove('menuBoxActived');
        menuBoxDivDoms[index].style.display = 'none';
    })
})

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 锚点跳转
let mainMenuDom = document.querySelector('.mainMenu');
window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    if (scrollY > 740 && scrollY < 3640) {
        mainMenuDom.style.display = 'block';
    } else {
        mainMenuDom.style.display = 'none';
    }

})
// 侧边栏
let BookPositionTopDoms = document.querySelectorAll('.BookPositionTop');
let BookPositionLeftDom = document.querySelector('.BookPositionLeft');
let BookPositionLeftSonDoms = document.querySelectorAll('.BookPositionLeftSon');
let BookPositionTopTime;
BookPositionTopDoms.forEach((item) => {
    item.style.display = 'none';
})
// BookPositionTopDoms[0].style.display = 'flex';
BookPositionLeftSonDoms.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        clearTimeout(BookPositionTopTime);
        BookPositionTopDoms.forEach((item) => {
            item.style.display = 'none';
        })
        BookPositionTopDoms[index].style.display = 'flex';
    })
    item.addEventListener('mouseleave', () => {
        clearTimeout(BookPositionTopTime);
        BookPositionTopTime = setTimeout(() => {
            BookPositionTopDoms[index].style.display = 'none';
            // console.log("display:"+item.style.display);
        }, 300)
    })
})
// 顶部栏
let BookTitleDoms = document.querySelectorAll('.bookTitle p');
BookTitleDoms[0].classList.add('bookTileActived');
BookTitleDoms.forEach((item) => {
    item.addEventListener('click', () => {
        BookTitleDoms.forEach((item) => {
            item.classList.remove('bookTileActived');
        })
        item.classList.add('bookTileActived');
    })
})
// *********************************************************************************************
// 图书模块
// 畅销榜
// 畅销榜innerHTML
let bookArr = [
    {name:'《从你的全世界路过》',img:'../images/indexImg/book03.jpg',details:'从你的世界路过入选央视“2014中国好书”的80后作品！十年华语畅销小说，王家卫陈国富倾力推荐，1500万次转发，超4亿次阅读'},
    {name:'《大清相国》',img:'../images/indexImg/book04.jpg',details:'《大清相国》以陈廷敬为原型，讲述其在康熙朝历经官场沉浮，凭借清廉品格、智慧谋略坚守为官底线，整顿吏治、体恤民生的传奇历程，展现清代官场的风云变幻与为官之道'},
    {name:'《白夜行》',img:'../images/indexImg/book05.jpg',details:'《白夜行》是东野圭吾的经典悬疑小说，以桐原亮司与唐泽雪穗跨越十九年的共生关系为主线，串联起多起悬疑案件，在黑暗压抑的基调中探讨人性、欲望与救赎，情节紧凑且后劲十足'},
    {name:'《心理博弈术》',img:'../images/indexImg/book06.jpg',details:'《心理博弈术》是一本关于心理学的书籍，主要介绍了心理学中博弈论的概念和应用。该书由美国心理学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括博弈论的基本概念、博弈论的应用、博弈论的实验和博弈论的未来发展等'},
    {name:'《偷影子的人》',img:'../images/indexImg/book07.jpg',details:'《偷影子的人》是一本关于人性的书籍，主要介绍了人性中偷影子的概念和应用。该书由美国心理学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括偷影子的基本概念、偷影子的应用、偷影子的实验和偷影子的未来发展等'},
    {name:'《金融炼金术》',img:'../images/indexImg/book08.jpg',details:'《金融炼金术》是一本关于金融的书籍，主要介绍了金融中炼金术的概念和应用。该书由美国金融学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括金融炼金术的基本概念、金融炼金术的应用、金融炼金术的实验和金融炼金术的未来发展等'},
    {name:'《百年孤独》',img:'../images/indexImg/book09.jpg',details:'《百年孤独》是一本关于历史的书籍，主要介绍了历史中百年孤独的概念和应用。该书由美国历史学会（APA）出版，作者是丹尼尔·卡尼曼（Daniel Kahneman）。该书的主要内容包括百年孤独的基本概念、百年孤独的应用、百年孤独的实验和百年孤独的未来发展等'}
]
let bookBoxLeftDom = document.querySelector('.bookBoxLeft');
bookArr.forEach((item,index)=>{
bookBoxLeftDom.innerHTML += `
    <div class="bookNo${index+1} bookNum">
        <span>${index+1}</span>
        <div class="bookDetailsBox">
            <img src="${item.img}" alt="">
            <p>${item.details}</p>
        </div>
        <p>${item.name}</p>
    </div>
`;
})
let bookNumDoms = document.querySelectorAll('.bookNum');
let bookDetailsBoxDoms = document.querySelectorAll('.bookDetailsBox');
let bookDetailsBoxPDoms = document.querySelectorAll('.bookNum>p');
bookDetailsBoxDoms.forEach((item) => {
    item.style.display = 'none';
})
bookDetailsBoxPDoms.forEach((item) => {
    item.style.display = 'block';
})
bookDetailsBoxDoms[0].style.display = 'flex';
bookDetailsBoxPDoms[0].style.display = 'none';
bookNumDoms.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        bookDetailsBoxDoms.forEach((item) => {
            item.style.display = 'none';
        })
        bookDetailsBoxDoms[index].style.display = 'flex';
        bookDetailsBoxPDoms.forEach((item) => {
            item.style.display = 'block';
        })
        bookDetailsBoxPDoms[index].style.display = 'none';
    })
})
// 表格innerHTML数据
let bookTableTrDoms = document.querySelectorAll('.bookTable tr');
bookTableTrDoms.forEach((item,index)=>{
    let num = 4;
    if(index == 0){
        num = 2;
    }
    for(let i=0;i<num;i++){
        item.innerHTML +=`
            <td>
                <p>奥运狂欢</p>
                <p>10万种电子书 直降40%</p>
                <img src="../images/indexImg/book02.jpg" alt="">
                <div>
                    <span>￥&nbsp;49</span>
                    <del>￥&nbsp;79</del>
                </div>
            </td>
        `
    console.log("num:"+num);
    }
})



// *********************************************************************************************
// 服装模块
// 顶部栏
let clothingTitlepDoms = document.querySelectorAll('.clothingTitleDiv p');
clothingTitlepDoms[0].classList.add('clothingTileActived');
clothingTitlepDoms.forEach((item) => {
    item.addEventListener('click', () => {
        clothingTitlepDoms.forEach((item) => {
            item.classList.remove('clothingTileActived');
        })
        item.classList.add('clothingTileActived');
    })
})
let clothingBottomDoms = document.querySelectorAll('.clothingBottom');
clothingBottomDoms.forEach((item)=>{
    for(let i=0;i<9;i++){
        item.innerHTML +=`
            <img src="../images/indexImg/brandLogo0${i+1}.jpg" alt="">
        `
    }
})
let clothingRowDoms = document.querySelectorAll('#clothing .clothingRow');
clothingRowDoms.forEach((item,index)=>{
    for(let i=0;i<3;i++){
        item.innerHTML +=`
        <img src="../images/indexImg/clothing0${index+2}.jpg" alt="">
    `
    }
})

// *********************************************************************************************
// 户外运动模块
// 顶部栏
let sportTitlepDoms = document.querySelectorAll('.sportTitleDiv p');
sportTitlepDoms[0].classList.add('clothingTileActived');
sportTitlepDoms.forEach((item) => {
    item.addEventListener('click', () => {
        sportTitlepDoms.forEach((item) => {
            item.classList.remove('clothingTileActived');
        })
        item.classList.add('clothingTileActived');
    })
})
let sportRowDoms = document.querySelectorAll('#sport .clothingRow');
sportRowDoms.forEach((item,index)=>{
    for(let i=0;i<3;i++){
        item.innerHTML +=`
        <img src="../images/indexImg/sport0${index+2}.jpg" alt="">
    `
    }
})

// *********************************************************************************************
// 童装模块
// 顶部栏
let childrenTitlepDoms = document.querySelectorAll('.childrenTitleDiv p');
childrenTitlepDoms[0].classList.add('clothingTileActived');
childrenTitlepDoms.forEach((item) => {
    item.addEventListener('click', () => {
        childrenTitlepDoms.forEach((item) => {
            item.classList.remove('clothingTileActived');
        })
        item.classList.add('clothingTileActived');
    })
})
let childRowDoms = document.querySelectorAll('#child .clothingRow');
childRowDoms.forEach((item,index)=>{
    for(let i=0;i<3;i++){
        item.innerHTML +=`
        <img src="../images/indexImg/child0${index+2}.jpg" alt="">
    `
    }
})
// *********************************************************************************************************
//  household模块
let householdRowDoms = document.querySelectorAll('.householdRow');
householdRowDoms.forEach((item,index)=>{
    for(let i=0;i<3;i++){
        item.innerHTML +=`
        <img src="../images/indexImg/house0${index+2}.jpg" alt="">
    `
    }
})
let houseImgList = document.querySelectorAll('.householdRow img');
houseImgList.forEach(item=>{
    item.style.objectFit = 'contain';
})

// *******************************************************************************************************
// 推广商品
let promoteGoodsListDom = document.querySelector('.promoteGoodsList');
for(let i=0;i<10;i++){
    promoteGoodsListDom.innerHTML +=`
        <div class="promoteGoodsBox">
            <div class="promoteGoodsImg">
                <img src="../images/indexImg/promote01.jpg" alt="">
            </div>
            <div class="promoteGoodsText">
                Pigeon法国制奶嘴，五毒天然乳胶
            </div>
            <div class="promoteGoodsPrice">
                ￥&nbsp;&nbsp;：189
            </div>
            <div class="promoteGoodsComment">
                <img src="../images/indexImg/promote02.jpg" alt="">
                已有<span>988</span>条评价
            </div>
        </div>
    `
}

// ************************************************************************************************
// footer模块 返回顶部
let topImgDom = document.querySelector('.topImg');
topImgDom.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})