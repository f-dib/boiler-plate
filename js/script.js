const gridElement = document.querySelector("#grid")

for(let i = 1; i <= 100; i++) {

    gridElement.innerHTML += `<div class="square">${i}</div>`;
    
}