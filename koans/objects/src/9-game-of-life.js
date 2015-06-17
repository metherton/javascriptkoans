var SAMURAIPRINCIPLE = {};
SAMURAIPRINCIPLE.isCellAliveInNextGeneration = function (isCellAlive, numberOfNeighbours) {
	if (isCellAlive && numberOfNeighbours < 2) {
        return false;
    } else if (isCellAlive && (numberOfNeighbours === 2 || numberOfNeighbours ===3)) {
        return true;
    } else if (isCellAlive && numberOfNeighbours > 3) {
        return false;
    } else if (!isCellAlive && numberOfNeighbours === 3) {
        return true;
    } else {
        return false;
    }
};
