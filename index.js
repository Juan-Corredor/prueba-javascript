//Elementos HTML
let boton = document.getElementById('boton');
let valorVehiculo = document.getElementById("valorVehiculo");    

//Variables de resultados
let resultGlobal = document.getElementById('texto_1');
let resultadosPeajeTotalA = document.getElementById('peaje_ta');
let resultadosPeajeTotalC = document.getElementById('peaje_tc');
let resultadosPeajeTotalM = document.getElementById('peaje_tm');

let resultadosPeajesA = document.getElementById('peaje_a');
let resultadosPeajesC = document.getElementById('peaje_c');
let resultadosPeajesM = document.getElementById('peaje_m');

//Arreglos de tipos vehiculos
let peajesAutomovil = [];
let peajesCamion = [];
let peajesMula = [];
let totalPeajes = []
//Variables para calcular totales individuales
let peajeTotalA = 0;
let peajeTotalC = 0;
let peajeTotalM = 0;


function valorInput(tipo){
    return valorVehiculo.value = tipo
}

boton.onclick =  function( ){     
    switch (valorVehiculo.value) {
        case 'automovil':
        case 'automóvil':
            peajesAutomovil.push(15.300)
            totalPeajes.push(15.300)
          break;
        case 'camion':
        case 'camión':
            peajesCamion.push(20.200)
            totalPeajes.push(20.200)
            break;
        case 'mula':
            peajesMula.push(25.500)
            totalPeajes.push(25.500)
            break;
        default:
          alert(`Lo siento, no se encontro el tipo de vehiculo ${valorVehiculo.value}.`);                  
            break;          
    }     
    let resultados = `Los peajes recaudados de los ${totalPeajes.length} vehiculos fueron ${totalPeajes}.`
    resultGlobal.innerHTML = resultados
    calculoPeajeTotal()
    
    resultadosPeajesA.innerHTML =  peajesPorVehiculo('automóvil', peajesAutomovil )
    resultadosPeajesC.innerHTML =  peajesPorVehiculo('camión', peajesCamion )
    resultadosPeajesM.innerHTML =  peajesPorVehiculo('mula', peajesMula )
    valorVehiculo.value = "";
    return false;
};

function calculoPeajeTotal(){
    resultadosPeajeTotalA.innerHTML =  peajesTotal('automóvil', peajesAutomovil, peajeTotalA );        
    resultadosPeajeTotalC.innerHTML =  peajesTotal('camión', peajesCamion, peajeTotalC );   
    resultadosPeajeTotalM.innerHTML =  peajesTotal('mula', peajesMula, peajeTotalM );
}    

function peajesTotal(nameTipoVehiculo, listVehiculo, totalTipoPeaje){
    for (var v = 0; v < listVehiculo.length; v++) {
        let n = 0;
        n += v;     
        totalTipoPeaje += listVehiculo[n];                       
    }

    let resultados = `Peaje total por ${nameTipoVehiculo}: ${totalTipoPeaje}`;                
    return resultados;
}

function peajesPorVehiculo(nameTipoVehiculo, vehiculo){
    let resultados = `Para el tipo de vehiculo "${nameTipoVehiculo}" los valores recaudados fueron: ${vehiculo}`;    
    return resultados;
}