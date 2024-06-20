let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function () {
    sidebar.classList.toggle('active');
}


const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        sidebarLinks.forEach(active =>{
            active.classList.remove('active');
        })
        link.classList.add('active');
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const contact = document.querySelector('.Contact');

contact.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);        const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
});

const sections = document.querySelectorAll('.body-part');
const links = document.querySelectorAll('.sidebar ul li a');

let observerCallback = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let targetId = entry.target.id;

            links.forEach(link => {
                link.classList.remove('active');
            });

            let activeLink = document.querySelector(`.sidebar ul li a[href="#${targetId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

let observer = new IntersectionObserver(observerCallback, {threshold: 0.5});
sections.forEach(section => {
    observer.observe(section);
});


send=document.getElementById('send')
send.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('name').value='';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
})
