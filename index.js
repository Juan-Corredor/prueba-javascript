//Variables de resultados
const elementosHtml = {
    boton: document.getElementById('boton'),
    inputVehiculo: document.getElementById("valorVehiculo"),
    peajesGlobal : document.getElementById('texto_1'),
    totalAutomovil: document.getElementById('peaje_ta'),
    totalCamion: document.getElementById('peaje_tc'),
    totalMula: document.getElementById('peaje_tm'),
    totalGeneral: document.getElementById('peajes_tt'),
    peajesAutomovil: document.getElementById('peaje_a'),
    peajesCamion: document.getElementById('peaje_c'),
    peajesMula: document.getElementById('peaje_m'),
}
//Arreglos de tipos vehiculos
const listPeajes = {
    peajesAutomovil: [],
    peajesCamion: [],
    peajesMula: [],
    peajeTotal: []
}

//Variables para calcular totales individuales y para formatear valor
let peajeTotal = 0;
const formatterNum = new Intl.NumberFormat('de-DE')

// function valorInput(tipo){
//     return elementosHtml.inputVehiculo.value = tipo;
// }

elementosHtml.boton.onclick =  function( ){ 
    elementosHtml.peajesGlobal.innerHTML = calculoValorPeaje();
    //Total de Peajes por vehiculos
    elementosHtml.totalAutomovil.innerHTML =  peajesTotal('automóvil', listPeajes.peajesAutomovil, peajeTotal );        
    elementosHtml.totalCamion.innerHTML =  peajesTotal('camión', listPeajes.peajesCamion, peajeTotal );   
    elementosHtml.totalMula.innerHTML =  peajesTotal('mula', listPeajes.peajesMula, peajeTotal );
    elementosHtml.totalGeneral.innerHTML =  peajesTotal('todos', listPeajes.peajeTotal, peajeTotal);
    //Lista de peajes recaudados por vehiculos
    elementosHtml.peajesAutomovil.innerHTML =  peajesPorVehiculo('automóvil', listPeajes.peajesAutomovil);
    elementosHtml.peajesCamion.innerHTML =  peajesPorVehiculo('camión', listPeajes.peajesCamion);
    elementosHtml.peajesMula.innerHTML =  peajesPorVehiculo('mula', listPeajes.peajesMula);       
    return false;        
};

function calculoValorPeaje(){
    switch (valorVehiculo.value) {        
        case 'automóvil':
            listPeajes.peajesAutomovil.push(15300)
            listPeajes.peajeTotal.push(15300)
          break;        
        case 'camión':
            listPeajes.peajesCamion.push(20200)
            listPeajes.peajeTotal.push(20200)
            break;
        case 'mula':
            listPeajes.peajesMula.push(25500)
            listPeajes.peajeTotal.push(25500)
            break;
        default:
          alert("Lo siento, debe elegir primero el tipo de vehiculo");                  
            break;          
    }     
    let resultados = `Los peajes recaudados de los ${listPeajes.peajeTotal.length} vehiculos fueron: [${listPeajes.peajeTotal.map(formatterNum.format)}].`    
    return resultados;
}

function peajesTotal(nameTipoVehiculo, listVehiculo, totalTipoPeaje){
    for (var v = 0; v < listVehiculo.length; v++) {
        let n = 0;
        n += v;     
        totalTipoPeaje += listVehiculo[n];                       
    }

    let resultados = ``;                
    nameTipoVehiculo == "todos" ? 
        resultados = `Para un total de: ${formatterNum.format(totalTipoPeaje)}` : resultados = `Peaje total por ${nameTipoVehiculo}: ${formatterNum.format(totalTipoPeaje)}`
    return resultados;
}

function peajesPorVehiculo(nameTipoVehiculo, vehiculo){
    let resultados = `Para el tipo de vehiculo "${nameTipoVehiculo}" los valores recaudados fueron: [${vehiculo.map(formatterNum.format)}]`;    
    return resultados;
}
