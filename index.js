function sqrt(broj){
    if(broj<0){
        let ovo=broj**0.5
        return ovo + "i";
    }else{
        return broj**0.5;
    }
}
function pow2(broj){
    return broj*broj;
}
function AreaOfLudiTriangle(a){
    let x=(a*a*1.732)/4; 
    return x + "m^2";
}function NonNegativeInt(a){
    if(a<0){
        return a*-1;
    }else{
        return a;
    }
}
module.exports.sqrt=sqrt;
module.exports.pow2=pow2;
module.exports.AreaOfLudiTriangle=AreaOfLudiTriangle;
module.exports.NonNegativeInt=NonNegativeInt;