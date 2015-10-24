var domReady = function(callback) {
    var readyStates = ['interactive', 'complete'];
    readyStates.indexOf(document.readyState > -1) ? callback() : document.addEventListener('DOMContentLoaded', callback);
};

var init = function() {
    var logo = document.getElementById('logo');
    var colorLabel = document.getElementById('color');
    var wordsLabel = document.getElementById('words');

    var toggleTheme = function() {
        var color = getRandomColor();
        logo.style.background = color;
        colorLabel.innerHTML = color;
        wordsLabel.innerHTML = words(5).join(' ');
    };

    var getRandomColor = function() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    logo.addEventListener('click', function(e) {
        toggleTheme();
    }, false);

    toggleTheme();
};

domReady(init);
