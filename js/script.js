const gridElement = document.querySelector("#grid")

for(let i = 1; i <= 100; i++) {


    //EXPERIMENT: I set a delay of 100 milliseconds in the creation of each square
    
    setTimeout(function() {
        
        const newElement = document.createElement("div");
        newElement.className = "square";
        newElement.innerHTML = i;
        newElement.style.fontSize = "20px";
        newElement.style.fontWeight = "bold";
        newElement.style.color = "black";
        newElement.style.backgroundColor = "#1389b2";
    
        if (i % 3 == 0){
    
            newElement.innerHTML = 'FIZZ';
            newElement.style.backgroundColor = '#0cd6a1'
    
        } else if (i % 5 == 0){
    
            newElement.innerHTML = 'BUZZ';
            newElement.style.backgroundColor = '#ffd166';
        
        }
        
        if ((i % 3 == 0) && (i % 5 == 0)) {
    
            newElement.innerHTML = 'FIZZBUZZ';
            newElement.style.backgroundColor = '#f0466f';
        
        }
    
        gridElement.append(newElement);

    },i * 200)

}