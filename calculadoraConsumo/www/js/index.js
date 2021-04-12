function clicar(){
    let quest1= document.querySelector(".quest1").value
    let quest2= document.querySelector(".quest2").value
    let quest3= document.querySelector(".quest3").value
    let quest4= document.querySelector(".quest4").value
    let calcular = parseInt((quest1) * (quest2) * (quest3)/1000) * (quest4)
    document.getElementById("calcular").innerHTML = calcular
    
}
//CONSUMO (kWh) = potência (W) x horas de uso por dia (h) x dias de uso no mês / 1000.



//<input type="button" class="button" onclick="back()" value="Limpar">