const openModal = document.querySelectorAll('.img-fluid');
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal_img');
const closeModal = document.querySelector('.modal_close')

openModal.forEach((img) =>{
    img.addEventListener("click", (e)=>{
        e.preventDefault();
        modal.classList.add('modal--show');
        modalImg.src = img.src;
    } )
})

closeModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})