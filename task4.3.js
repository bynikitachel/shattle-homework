document.write('task 3')

const nav = document.createElement("nav");
nav.style.background = '#000'
document.body.append(nav);

const сontainer = document.createElement('div');
сontainer.classList.add('container');
сontainer.style.width = '70%';
сontainer.style.margin = '0 auto';
сontainer.style.display = 'flex';
сontainer.style.justifyContent = 'space-between';
сontainer.style.padding = '15px 0 15px 0';
nav.append(сontainer);

const logo = document.createElement('div');
logo.classList.add('logo');
сontainer.append(logo);
const imgLogo = document.createElement('img');
imgLogo.classList.add('imgLogo');
imgLogo.src = './img/logo.jpg';
imgLogo.width = '50';
logo.append(imgLogo);

const ul = document.createElement('ul');
ul.classList.add('navigation');
ul.style.display = 'flex';
ul.style.margin = '0';
ul.style.padding = '0';
ul.style.alignItems = 'center';

for (i = 0; i < 5; i++) {
    li = document.createElement('li');
    li.style.marginLeft = '10px';
    if (i === 0) { li.innerHTML = 'Features' };
    if (i === 1) { li.innerHTML = 'About' };
    if (i === 2) { li.innerHTML = 'Pricing' };
    if (i === 3) { li.innerHTML = 'Reviews' };
    if (i === 4) { li.innerHTML = 'Contacts' };
    li.style.color = '#fff';
    li.style.listStyle = 'none';
    ul.append(li);
}
сontainer.append(ul);

const section = document.createElement('section');
section.style.width = '100%';
section.style.height = '100vh';
section.style.background = 'gray';
document.body.append(section);