const gridElement = document.querySelector("#grid")

for(let i = 1; i <= 100; i++) {

    const newElement = document.createElement("div");
    newElement.className = "square";
    newElement.innerHTML = i;

    gridElement.append(newElement);
    
    
}