let janCW = 8.6;
let febCW = 7.0;
let marCW = 9.1;
let aprCW = 8.7;
let mayCW = 8.8;
let junCW = 9.2;
let julCW = 9.3;
let augCW = 9.1;
let sepCW = 8.8;
let octCW = 8.4;
let novCW = 8.4;
let decCW = 8.9;

let janL = 110;
let febL = 115;
let marL = 109;
let aprL = 108;
let mayL = 101;
let junL = 96;
let julL = 94;
let augL = 120;
let sepL = 118;
let octL = 108;
let novL = 113;
let decL = 119;

let meterColdWater = janCW + febCW + marCW + aprCW + mayCW + junCW + julCW + augCW + sepCW + octCW + novCW + decCW; //лічильник холодної води
let meterLight = janL + febL + marL + aprL + mayL + junL + julL + augL + sepL + octL + novL + decL; //лічильник світла

let resultWater = meterColdWater * 30.384; // вартість води в гривнях
let resultLight = meterLight * 2.64; // вартість світла в гривнях

console.log("Витрати холодної води за рік:", meterColdWater.toFixed(2) + " м3" + ' = ' +  resultWater.toFixed(2) + " грн");

console.log("Витрати світла за рік:", meterLight.toFixed(2) + " кВ*г" + ' = ' +  resultLight.toFixed(2) + " грн");

