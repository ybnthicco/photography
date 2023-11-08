const liItem = document.querySelectorAll('ul li');
const imgItem = document.querySelector('.product img');

liItem.forEach(li => {
    li.onclick = function() {
        //active
        liItem.forEach(li => {
            li.className = "";
        })
        li.className = "active";
    }

    /* console.log(document.querySelector("#second li").textContent); */

    //Filter
    const value = document.querySelector("#second li").textContent
    imgItem.forEach(img => {
        img.style.display =
    })

});