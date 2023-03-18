function Sumar(){
    let vl_sNumero1 = parseInt(document.getElementById("Numero1").value);
    let vl_sNumero2 = parseInt(document.getElementById("Numero2").value);
    let vl_sResultado = 0 ; 

    if(isNaN(vl_sNumero1)  ||  isNaN(vl_sNumero2)){
        alert("Por favor ingrese un número valido")
    }else{
        vl_sResultado =vl_sNumero1 + vl_sNumero2;
        document.getElementById("Total").innerText="La suma de los dos numeros es " + vl_sResultado;
    }    
}