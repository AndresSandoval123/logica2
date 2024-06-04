let buttonConvertir = document.getElementById("buttonConvertir");
let k = document.getElementById("k");
let f = document.getElementById("f");


function convertirTemp(datoTemperatura){ 
    if(isNaN(datoTemperatura)){
        alert("Error: Ingrese un valor numerico");
    }
    let convertirKelvin = datoTemperatura + 273.15;
    let convertirFahrenheir = (datoTemperatura * 9/5)+32;
    return {
        kelvi: convertirKelvin, 
        farent: convertirFahrenheir
    }
}

buttonConvertir.addEventListener("click", ()=> {
    
    let datoTemperatura = document.getElementById("datoTemperatura").value;
    let resultado = convertirTemp(parseInt(datoTemperatura));
    console.log(resultado.kelvi);
    console.log(resultado.farent);
    
    k.innerHTML = `
    <h4> ${resultado.kelvi} </h4>
    `
    f.innerHTML = `
    <h4> ${resultado.farent} </h4>
    `
});





