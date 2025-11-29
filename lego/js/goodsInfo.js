// goodsInfo
// 详情图切换
let DetailListArr = [
    "../images/goodsInfoImg/infoBookDetail01.png",
    "../images/goodsInfoImg/infoBookDetail02.png",
    "../images/goodsInfoImg/infoBookDetail01.png",
    "../images/goodsInfoImg/infoBookDetail02.png",
    "../images/goodsInfoImg/infoBookDetail01.png",
    "../images/goodsInfoImg/infoBookDetail02.png",
]
let goodsInfoDetailListDom = document.querySelector('.goodsInfoDetailList>div');
DetailListArr.forEach((item, index) => {
    goodsInfoDetailListDom.innerHTML += `
        <img src="${item}" alt="">
    `
})

let goodsInfoImgDom = document.querySelector('.goodsInfoImg');
let goodsInfoDetailImgDoms = document.querySelectorAll('.goodsInfoDetailList>div>img');
let goodsInfoDetailImgIndex = 0;
goodsInfoImgDom.src = DetailListArr[0];
goodsInfoDetailIndex();
goodsInfoDetailImgDoms.forEach((item, index) => {
    item.addEventListener('click', () => {
        goodsInfoImgDom.src = DetailListArr[index];
        goodsInfoDetailImgIndex = index;
        goodsInfoDetailIndex();
    })
})

let goodsInfoDetailArrowLeftDom = document.querySelector('.goodsInfoDetailArrowLeft');
let goodsInfoDetailArrowRightDom = document.querySelector('.goodsInfoDetailArrowRight');
goodsInfoDetailArrowLeftDom.addEventListener('click', () => {
    goodsInfoDetailImgIndex--;
    if (goodsInfoDetailImgIndex < 0) {
        goodsInfoDetailImgIndex = DetailListArr.length - 1;
    }
    goodsInfoImgDom.src = DetailListArr[goodsInfoDetailImgIndex];
    goodsInfoDetailIndex();
    // 移动到目标图片
    scrollToTargetImg(goodsInfoDetailImgDoms[goodsInfoDetailImgIndex]);
})
goodsInfoDetailArrowRightDom.addEventListener('click', () => {
    goodsInfoDetailImgIndex++;
    if (goodsInfoDetailImgIndex > DetailListArr.length - 1) {
        goodsInfoDetailImgIndex = 0;
    }
    goodsInfoImgDom.src = DetailListArr[goodsInfoDetailImgIndex];
    goodsInfoDetailIndex();
    // 移动到目标图片
    scrollToTargetImg(goodsInfoDetailImgDoms[goodsInfoDetailImgIndex]);
})

function goodsInfoDetailIndex() {
    goodsInfoDetailImgDoms.forEach((item) => {
        item.classList.remove('goodsInfoDetailImgActived');
    })
    goodsInfoDetailImgDoms[goodsInfoDetailImgIndex].classList.add('goodsInfoDetailImgActived');
}

function scrollToTargetImg(item) {
    item.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
    });
}

// 种类选择
let kidChooseDoms = document.querySelectorAll('.kidChoose>div');
kidChooseDoms[1].classList.add('kidChooseActived');
kidChooseDoms.forEach((item) => {
    item.addEventListener('click', () => {
        kidChooseDoms.forEach((item) => {
            item.classList.remove('kidChooseActived');
        })
        item.classList.add('kidChooseActived');
    })
})

// 购物车数量加减
let shopingCarAddDom = document.querySelector('.shopingCarAdd');
let shopingCarSubDom = document.querySelector('.shopingCarSub');
let shopingCarNumDom = document.querySelector('.shopingCarNum');

shopingCarAddDom.addEventListener('click', () => {
    shopingCarNumDom.value++;
})
shopingCarSubDom.addEventListener('click', () => {
    if (shopingCarNumDom.value == 1) {
        return;
    }
    shopingCarNumDom.value--;
})

let shopingCarBtnDom = document.querySelector('.shopingCarBtn');
shopingCarBtnDom.addEventListener('click', () => {
    window.location.href = "./car.html";
})

// 人气单品
// 猜你喜欢
let bookDiscountArr = [
    { bookImg: '../images/goodsInfoImg/bookNo4.jpg', tagImg: '../images/goodsInfoImg/tag01.png', bookName: '白夜行&nbsp;&nbsp;&nbsp;&nbsp;东野上吾', bookPrice: '¥&nbsp;:&nbsp;38', bookDiscountPrice: '¥&nbsp;:&nbsp;58' },
]
let bookDiscountListDom = document.querySelector('.bookDiscountList');
for (let i = 0; i < 5; i++) {
    bookDiscountListDom.innerHTML += `
        <div class="bookDiscountItem">
            <img src="${bookDiscountArr[0].bookImg}" alt="" class="bookDiscountItemBookImg">
            <img src="${bookDiscountArr[0].tagImg}" alt="">
            <p>${bookDiscountArr[0].bookName}</p>
            <div>
                <span>推荐：</span>
                <img src="../images/goodsInfoImg/start.png" alt="">
            </div>
            <span>${bookDiscountArr[0].bookPrice}</span>
            <del>${bookDiscountArr[0].bookDiscountPrice}</del>
        </div>
    `
}
let bookDiscountItemDoms = document.querySelectorAll('.bookDiscountItem');
let bookDiscountDelDoms = document.querySelectorAll('.bookDiscountItem>del');
bookDiscountDelDoms.forEach((item) => {
    item.style.display = 'none';
})
bookDiscountItemDoms.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        bookDiscountDelDoms[index].style.display = 'inline';
    })
    item.addEventListener('mouseout', () => {
        bookDiscountDelDoms[index].style.display = 'none';
    })
})

// 看了又看
let seeAgainContentArr = [
    { bookImg: '../images/goodsInfoImg/bookNo4.jpg', tagImg: '../images/goodsInfoImg/tag01.png', bookName: '白夜行&nbsp;&nbsp;&nbsp;&nbsp;东野上吾', bookPrice: '¥&nbsp;:&nbsp;38', bookDiscountPrice: '¥&nbsp;:&nbsp;58' },
]
let seeAgainDom = document.querySelector('.seeAgain');
for (let i = 0; i < 7; i++) {
    seeAgainDom.innerHTML += `
        <div class="seeAgainContent">
            <div class="bookDiscountItem">
                <img src="${bookDiscountArr[0].bookImg}" alt="" class="bookDiscountItemBookImg">
                <img src="${bookDiscountArr[0].tagImg}" alt="">
                <p>${bookDiscountArr[0].bookName}</p>
                <div>
                    <span>推荐：</span>
                    <img src="../images/goodsInfoImg/start.png" alt="">
                </div>
                <span>${bookDiscountArr[0].bookPrice}</span>
                <del>${bookDiscountArr[0].bookDiscountPrice}</del>
            </div>
        </div>
    `
}


// fun切换
let funTitleDoms = document.querySelectorAll('.funTitle>p');
let funContentDoms = document.querySelectorAll('.funContent');
funTitleDoms[0].classList.add('funTitleActived');
funContentDoms[0].style.display = 'block';
funTitleDoms[1].classList.remove('funTitleActived');
funContentDoms[1].style.display = 'none';
funTitleDoms.forEach((item, index) => {
    item.addEventListener('click', () => {
        funTitleDoms.forEach((item) => {
            item.classList.remove('funTitleActived');
        })
        item.classList.add('funTitleActived');
        funContentDoms.forEach((item) => {
            item.style.display = 'none';
        })
        funContentDoms[index].style.display = 'block';
    })
})

// 进度条
let scroeDoms = document.querySelectorAll('.scoreItem>p>span');
let scoreItemDoms = document.querySelectorAll('.scoreItem>div');
let scoreItemSonDoms = document.querySelectorAll('.scoreItem>div>div');
scoreItemDoms.forEach((item,index)=>{
    item.addEventListener("click",(e)=>{
        scoreItemSonDoms[index].style.width = e.offsetX + 'px';
        scroeDoms[index].innerHTML = Math.ceil(e.offsetX / 150 * 100) + '%';
    })
})

// commentNav
let commentNavDoms = document.querySelectorAll('.commentNav>p');
commentNavDoms[0].classList.add('commentNavActived');
commentNavDoms.forEach((item)=>{
    item.addEventListener('click',()=>{
        commentNavDoms.forEach((item)=>{
            item.classList.remove('commentNavActived');
        })
        item.classList.add('commentNavActived');
    })
})


// 评论列表
let commentContentDom = document.querySelector('.commentContent');
for (let i = 0; i < 12; i++) {
    commentContentDom.innerHTML += `
        <div class="commentContentItem">
            <div class="start">
                <div class="startItem">
                    <div class="greySartBox"></div>
                    <div class="redStarBox"></div>
                </div>
                    <p>下单后5天评论</p>
                    <p>2016-08-11</p>
            </div>
            <div class="commentText">
                书的质量不错，很新，一点放久的潮味或臭味都没有，内容也值得一看，关键是价格真给力
            </div>
            <div class="commentUserInfo">
                <div>
                    <img src="../images/goodsInfoImg/userImg.png" alt="">
                    <p>洲**子</p>
                </div>
                <p>金牌会员</p>
                <p>来自iPhone客户端</p>
            </div>
        </div>
    `
}

// start
let startItemDoms = document.querySelectorAll('.startItem');
let redStarBoxDoms = document.querySelectorAll('.redStarBox');

startItemDoms.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
        redStarBoxDoms[index].style.width = e.offsetX + 'px';
    })
})


// page
let pageNumDoms = document.querySelectorAll('.pageNum');
let nextBtnDom = document.querySelector('.nextBtn');
let pageNum = 0;
pageNumDoms[pageNum].classList.add('pageNumActived');
nextBtnDom.addEventListener('click',()=>{
    pageNumDoms[pageNum].classList.remove('pageNumActived');
    pageNum++;
    if(pageNum >= pageNumDoms.length){
        pageNum = 0;
    }
    pageNumDoms[pageNum].classList.add('pageNumActived');
})
pageNumDoms.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        pageNumDoms[pageNum].classList.remove('pageNumActived');
        pageNum = index;
        pageNumDoms[pageNum].classList.add('pageNumActived');
    })
})