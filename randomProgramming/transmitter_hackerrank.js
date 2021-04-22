 
// Complete the hackerlandRadioTransmitters function below.
function hackerlandRadioTransmitters(x, k) {
    x.sort((a, b) => {return a-b})
    let allHouseCovered = false;
    let transmitterNeeded = 0;
    let houseCovered = 0;
    let currentHouseIndex = 0;
    let houseTransmitterListed = [];
    let maxHouseLocated = Math.max(...x);
    
    while(!allHouseCovered){
        let transmitterPosition =  x[0] + k;
        if(inArray(x, transmitterPosition)){
            houseTransmitterListed.push(x[transmitterPosition])
        }else{
            let transmitterPosition = getPosition(x, k, transmitterPosition)
        }
        let houseCovered = isAllHouseCovered(transmitterPosition, k, x, maxHouseLocated);
        if(!houseCovered){
            
        }
    }
    
}

function getPosition(x, k, transmitterPosition){
    for( let i = transmitterPosition - 1 ; i > x[0] ; i--){
        if(inArray(x, i)){
            return x[i]
        }
    }
}

function isAllHouseCovered(index, k, x, maxHouseLocated) {
    let i = index + k;
    if(i >= maxHouseLocated){
        return true
    }
    return false
}



function inArray(hayStack, needle){
    for(let i in hayStack){
        if(needle === hayStack[i]) return i
        return false
    }
}
