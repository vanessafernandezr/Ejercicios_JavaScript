const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const longerMonths = months
    .filter (month => month.length > 7)
    .map (month => month.toUpperCase());
console.log (longerMonths);

const number = longerMonths.length;
console.log ('Son ', number, ' meses los que tienen mas de 7 letras');