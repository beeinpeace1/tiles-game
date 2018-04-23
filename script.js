var inc = 0
var divs = document.querySelectorAll('.tile')

divs.forEach(function (item) {
    item.addEventListener('click', function (d) {
        if (d.target.style.backgroundColor == "black") {
            document.getElementById("points").innerHTML = "Points: " + (++inc);
        }
        else {
            document.getElementById("points").innerHTML = "Points: " + (--inc);

        }
    })
})

setInterval(() => {
    for (i = 0; i < divs.length; i++) {
        if (divs[i].style.backgroundColor)
            divs[i].style.backgroundColor = '';
    }
    var store = divs[Math.floor(Math.random() * 9)]
    store.style.background = 'black'
}, 1000)