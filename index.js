function SubmitClick () {
    let mas = input.value.trim().split(" ").map(Number);
    for (let i = 0; i < mas.length; i++){
        
        console.log(mas[i]);
    }
    for (let i = 0; i < mas.length; i++){
        let c = mas[i];
        let min_i = sort(mas,i)[1];
        mas[i] = sort(mas,i)[0];
        mas[min_i] = c;
    }
    
    for (let i = 0; i < mas.length; i++){
        
        console.log(mas[i]);
    }
    array.innerHTML = mas.join(' ');
}



function sort(mas,a){
    let min_i = a;
    let min = mas[a];
    for (let i = a+1; i < mas.length; i++){
        if (mas[i] < min){
            min = mas[i];
            min_i = i;
        }
    }
    return [min,min_i];
}
