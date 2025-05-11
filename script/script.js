const sidebarBtn = document.querySelector('.sidebar__btn');
const closeBtn = document.querySelector('.close__btn');
const sidebar = document.querySelector('.side__menu');
const logolink = document.querySelector('.logo img');
const submitbutton = document.querySelector('.submit-id')

AOS.init();

sidebarBtn.addEventListener('click', function(event){
    event.preventDefault();
    sidebar.classList.add('active');
})
closeBtn.addEventListener('click', function(e){
    e.preventDefault();
    sidebar.classList.remove('active');
})
logolink.addEventListener('click', function(e) {
    var hedefLink = "index.html";
    window.location.href = hedefLink;
    event.preventDefault();
});

document.querySelector('.up-button').addEventListener('click', function() {
    document.querySelector('.section5-comments').scrollBy({ top: -100, behavior: 'smooth' });
});

document.querySelector('.down-button').addEventListener('click', function() {
    document.querySelector('.section5-comments').scrollBy({ top: 100, behavior: 'smooth' });
});

const commentsContainer = document.querySelector('.section5-comments');
const comments = document.querySelectorAll('.comment');
const thirdCommentHeight = comments[2].offsetHeight; // Üçüncü yorumun yüksekliği

// Başlangıçta üçüncü yorumu göstermek için scrollTop ayarla
commentsContainer.scrollTop = thirdCommentHeight * 2;

// Buton işlevlerini tanımla
document.querySelector('.up-button').addEventListener('click', function() {
    // Kaydırmayı yukarı yap
    commentsContainer.scrollBy({ top: -100, behavior: 'smooth' });
});

document.querySelector('.down-button').addEventListener('click', function() {
    // Kaydırmayı aşağı yap
    commentsContainer.scrollBy({ top: 100, behavior: 'smooth' });
});
 