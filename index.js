// 1
function distanceFromHqInBlocks(blockNumber){
    if(blockNumber > 42){
        return blockNumber - 42
    } else{
        return 42 - blockNumber
    }
};


// 2

const feetPerBlock = 264;

function distanceFromHqInFeet(blockNumber){
    return feetPerBlock * distanceFromHqInBlocks(blockNumber)
}


// 3

function distanceTravelledInFeet(start, end){
    if (end > start){
        return (end - start) * feetPerBlock
    } else if (start > end){
        return (start - end) * feetPerBlock
    }
}


// 4

function calculatesFarePrice(start, end){
    if (distanceTravelledInFeet(start, end) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000){
        return 0.02 * (distanceTravelledInFeet(start, end) - 400);
    } else if (distanceTravelledInFeet(start, end) < 2500){
        return 25;
    } else if (distanceTravelledInFeet(start, end) > 2500){
        return 'cannot travel that far'
    }
}