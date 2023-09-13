function howManyNeeded(numberOfLayers: number, lastLayer: number | undefined) {
    if (!lastLayer)
        return;
    let result = 1;
    for (let i = 1; i < numberOfLayers; i++) {
        result *= 2;
    }
    return result;
}

function getPadding(count: number){
    switch(count){
        case 1: 
            return 170;
        case 2: 
            return 50;
        case 3: 
            return 35;
        default:
            return 0;
    }
}

export { howManyNeeded, getPadding};