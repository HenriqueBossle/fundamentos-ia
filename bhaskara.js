function delta(a, b, c){
    result = (b * b) - (4 * a * c);
}

function bhaskara(a, b, c){
    resultX1 = (-b + Math.sqrt(delta(a, b, c))) / (2 * a);
    resultX2 = (-b - Math.sqrt(delta(a, b, c))) / (2 * a);
}