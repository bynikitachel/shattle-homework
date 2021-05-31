const ol = document.createElement('ol');
document.body.append(ol);

let names = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"];
console.log(names);
for (i = 0; i < names.length; i++) {
    li = document.createElement('li');
    li.innerHTML = names[i];
    ol.append(li);
    if (i % 2 === 1) {
        li.classList.add('even');
        li.style.background = 'green';
    } else {
        li.classList.add('odd');
        li.style.background = 'blue';
    }
    let similarLetters;
    let namesToLetters = names[i].toLowerCase();
    console.log(namesToLetters);
    // let namesToLettersLow = names[i].split('');
    let k = 1;
    for (let Letter = 0; Letter < namesToLetters.length; Letter++) {
        similarLetters = namesToLetters[Letter];
        console.log(similarLetters)
        for (j = Letter + 1; j < namesToLetters.length; j++) {
            if (similarLetters === namesToLetters[j]) {
                k++;
                console.log(k)
            }
            if (k >= 2) {
                li.style.color = 'white';
            }
        }
    }
}