document.getElementById("btncuotas").addEventListener("click", 
function (){

    let servicio;
    let cuotas;
    do{
        servicio=Number(prompt("ingrese un numero de servicio: "));
    }while(servicio<1||servicio>4||!Number(servicio));
    
    do{
        cuotas =Number(prompt("Ingrese numero de cuotas deseado (1, 3 o 6): "));
    }while((cuotas!=1 && cuotas!=3 && cuotas!=6)||!Number(cuotas));
    
    let preciofin=parseFloat(recargoCuota(montoServicio(servicio),cuotas)).toFixed(2);
    alert("Precio de cada cuota: $"+preciofin);
    

}
);

function montoServicio(nroservicio){
    const barberia=8000;
    const corte_lavado=25000;
    const barba=6000;
    const ceja=3000;
    switch(nroservicio){
        case 1:
            return barberia;
            break;
        case 2:
            return corte_lavado;
            break;
        case 3:
            return barba;
            break;
        case 4:
            return ceja;
            break;
        
    }
}
function recargoCuota (precio, cuota=6){
    let recargo=1;
    let preciocuota;
    if (cuota==3) {
        recargo=1.1;
        
    } else {
        if (cuota==6) {
            recargo=1.3;

        }
    }
    preciocuota=(precio*recargo)/cuota;
    return preciocuota;
}