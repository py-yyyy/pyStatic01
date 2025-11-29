let carListArr = [
    { id: 1, checked: false, img: '../images/carImg/goodsImg.jpg', name: '从你的全世界路过', price: 41.00, number: 1 },
    { id: 2, checked: false, img: '../images/carImg/goodsImg.jpg', name: '从你的全世界路过', price: 41.00, number: 1 },
]
let carListBodyDom = document.querySelector('.carListBody');
let carListNumDom = document.getElementById('carListNum');
function carListArrShow() {
    carListNumDom.innerHTML = carListArr.length;
    carListBodyDom.innerHTML = '';
    carListArr.forEach((item) => {
        carListBodyDom.innerHTML += `
        <div class="item">
            <div>
                <input type="checkbox" id="item${item.id}" class="checkboxItem">
                <p class="checkboxP"></p>
                <div>
                    <img src="${item.img}" alt="">
                </div>
            </div>
            <div>${item.name}</div>
            <div class="price">${item.price.toFixed(2)}</div>
            <div class="numBox">
                <p class="numberAdd">+</p>
                <input type="number" value="${item.number}" class="numberInput">
                <p class="numberSub">-</p>
            </div>
            <div class="itemTotalPrice">${item.price * item.number}</div>
            <div class="itemBtn">
                <button class="deleteBtn" data-id="${item.id}">删除</button>
                <button>移到我的关注</button>
            </div>
        </div>
    `
    })
    carListFun();
}
carListArrShow();

function carListFun() {
    let checkboxAllPdom = document.querySelector('.checkboxAll');
    let checkboxAllDOm = document.getElementById('all');

    let checkboxItemPDoms = document.querySelectorAll('.checkboxP');
    let checkboxItemDoms = document.querySelectorAll('.checkboxItem');

    let settleAllPdom = document.querySelector('.checkboxSettleAll');
    let settleAllDOm = document.getElementById('settleAll');

    carListArr.forEach((item, index) => {
        if(item.checked){
            checkboxItemPDoms[index].classList.add('checkBoxActive');
        }
    })
    // 全选change监听
    checkboxAllDOm.addEventListener('change', () => {
        if (checkboxAllDOm.checked) {
            checkboxAllPdom.classList.add('checkBoxActive');
            checkboxItemDoms.forEach((item, index) => {
                item.checked = true;
                carListArr[index].checked = true;
                item.dispatchEvent(new Event('change'));
            })
        } else {
            checkboxAllPdom.classList.remove('checkBoxActive');
            checkboxItemDoms.forEach((item, index) => {
                item.checked = false;
                carListArr[index].checked = false;
                item.dispatchEvent(new Event('change'));
            })
        }
        checkedChange();

    })
    // 全选change监听
    settleAllDOm.addEventListener('change', () => {
        if (settleAllDOm.checked) {
            settleAllPdom.classList.add('checkBoxActive');
            checkboxItemDoms.forEach((item, index) => {
                item.checked = true;
                carListArr[index].checked = true;
                item.dispatchEvent(new Event('change'));
            })
        } else {
            settleAllPdom.classList.remove('checkBoxActive');
            checkboxItemDoms.forEach((item, index) => {
                item.checked = false;
                carListArr[index].checked = false;
                item.dispatchEvent(new Event('change'));
            })
        }
        checkedChange();

    })

    // 全选p点击监听
    checkboxAllPdom.addEventListener('click', () => {
        checkboxAllDOm.checked = !checkboxAllDOm.checked;
        checkboxAllDOm.dispatchEvent(new Event('change'));
        checkedChange();

    })

    settleAllPdom.addEventListener('click', () => {
        settleAllDOm.checked = !settleAllDOm.checked;
        settleAllDOm.dispatchEvent(new Event('change'));
        checkedChange();

    })

    // 单选change监听
    checkboxItemDoms.forEach((item, index) => {
        item.addEventListener('change', () => {
            if (item.checked) {
                checkboxItemPDoms[index].classList.add('checkBoxActive');
            } else {
                checkboxItemPDoms[index].classList.remove('checkBoxActive');
            }
            let isAllChecked = true;
            checkboxItemDoms.forEach((item) => {
                if (!item.checked) {
                    isAllChecked = false;
                }
            })
            checkboxAllDOm.checked = isAllChecked;
            checkboxAllDOm.checked ? checkboxAllPdom.classList.add('checkBoxActive') : checkboxAllPdom.classList.remove('checkBoxActive');
            settleAllDOm.checked = isAllChecked;
            settleAllDOm.checked ? settleAllPdom.classList.add('checkBoxActive') : settleAllPdom.classList.remove('checkBoxActive');
            checkedChange();
        })
    })

    // 单选p点击监听
    checkboxItemPDoms.forEach((item, index) => {
        item.addEventListener('click', () => {
            checkboxItemDoms[index].checked = !checkboxItemDoms[index].checked;
            carListArr[index].checked = checkboxItemDoms[index].checked;
            checkboxItemDoms[index].dispatchEvent(new Event('change'));
        })
    })



    // 数量加减
    let numberAddDoms = document.querySelectorAll('.numberAdd');
    let numberSubDoms = document.querySelectorAll('.numberSub');
    let numberInputDoms = document.querySelectorAll('.numberInput');
    // 加
    numberAddDoms.forEach((item, index) => {
        item.addEventListener('click', () => {
            numberInputDoms[index].value++;
            carListArr[index].number = numberInputDoms[index].value;
            numberInputDoms[index].dispatchEvent(new Event('change'));
            checkedChange();
        })
    })
    // 减
    numberSubDoms.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (numberInputDoms[index].value <= 1) {
                return;
            }
            numberInputDoms[index].value--;
            carListArr[index].number = numberInputDoms[index].value;
            numberInputDoms[index].dispatchEvent(new Event('change'));
            checkedChange();
        })
    })

    // 计算小计
    let priceDoms = document.querySelectorAll('.price');
    let itemTotalPriceDoms = document.querySelectorAll('.itemTotalPrice');
    numberInputDoms.forEach((item, index) => {
        item.addEventListener('change', () => {
            if (isNaN(Number(item.value)) || Number(item.value) < 1) {
                item.value = 1;
            }
            itemTotalPrice(index);
        })
    })
    function itemTotalPrice(index) {
        itemTotalPriceDoms[index].innerHTML = (Number(priceDoms[index].innerHTML) * Number(numberInputDoms[index].value)).toFixed(2);
        carListArr[index].price = Number(priceDoms[index].innerHTML);
    }
    itemTotalPriceDoms.forEach((item, index) => {
        itemTotalPrice(index);
    })
    // 删除
    let deleteBtnDoms = document.querySelectorAll('.deleteBtn');
    console.log(deleteBtnDoms);
    deleteBtnDoms.forEach((item, index) => {
        item.addEventListener('click', () => {
            const deleteId = Number(item.dataset.id);
            carListArr = carListArr.filter(item => item.id !== deleteId);
            carListArrShow();
            console.log(carListArr);
            if (carListArr.length === 0) {
                checkboxAllDOm.checked = false;
                checkboxAllDOm.dispatchEvent(new Event('change'));
                settleAllDOm.checked = false;
                settleAllDOm.dispatchEvent(new Event('change'));
            }
        })
    })

    // checkedchange监听
    let checkedNumDom = document.querySelector('#checkedNum');
    let totalPriceDom = document.querySelector('#totalPrice');
    function checkedChange() {
        checkedNumDom.innerHTML = carListArr.filter(item => item.checked).length;
        totalPriceDom.innerHTML = carListArr.filter(item => item.checked).reduce((pre, cur) => pre + Number(cur.price) * Number(cur.number), 0).toFixed(2);
    }
    checkedChange();

    // 删除选中
    let deleCheckedDom = document.querySelector('#deleChecked');
    deleCheckedDom.addEventListener('click', () => {
        carListArr = carListArr.filter(item => !item.checked);
        carListArrShow();
        checkedChange();
        if (carListArr.length === 0) {
            checkboxAllDOm.checked = false;
            checkboxAllDOm.dispatchEvent(new Event('change'));
            settleAllDOm.checked = false;
            settleAllDOm.dispatchEvent(new Event('change'));
        }
    })

}


// 猜你喜欢
let bookDiscountArr = [
    { bookImg: '../images/carImg/bookNo4.jpg', tagImg: '../images/carImg/tag01.png', bookName: '白夜行&nbsp;&nbsp;&nbsp;&nbsp;东野上吾', bookPrice: '¥&nbsp;:&nbsp;38', bookDiscountPrice: '¥&nbsp;:&nbsp;58' },
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
                <img src="../images/carImg/start.png" alt="">
            </div>
            <span>${bookDiscountArr[0].bookPrice}</span>
            <del>${bookDiscountArr[0].bookDiscountPrice}</del>
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