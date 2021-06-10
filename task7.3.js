let drowFigure = (fname, background, top, left, radius, length, width) => {
    if (fname === 'circle') {
        let circle = document.createElement('div');
        circle.style.background = background;
        circle.style.marginTop = top + 'px';
        circle.style.marginLeft = left + 'px';
        circle.style.borderRadius = radius + 'px';
        circle.style.width = radius * 2 + 'px';
        circle.style.height = radius * 2 + 'px';
        document.body.append(circle);
    } else if (fname === 'square') {
        let square = document.createElement('div');
        square.style.background = background;
        square.style.marginTop = top + 'px';
        square.style.marginLeft = left + 'px';
        square.style.width = length + 'px';
        square.style.height = width + 'px';
        document.body.append(square);
    }
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        drowFigure('circle', 'red', 100, 100, 20, 40, 40);
    } else if (event.key === 'w') {
        drowFigure('square', 'red', 100, 100, 40, 40, 40);
    }

});