let loginChooseDoms = document.querySelectorAll('.loginChoose p');
let loginChooseContentDoms = document.querySelectorAll('.loginChooseContent>div');
loginChooseDoms[0].classList.add('loginChooseActive');
loginChooseContentDoms[0].style.display = 'block';
loginChooseContentDoms[1].style.display = 'none';
loginChooseDoms.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        loginChooseDoms.forEach((item)=>{
            item.classList.remove('loginChooseActive');
        })
        loginChooseDoms[index].classList.add('loginChooseActive');
        loginChooseContentDoms.forEach((item)=>{
            item.style.display = 'none';
        })
        loginChooseContentDoms[index].style.display = 'block';
    })
})