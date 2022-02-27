import PlateResult from "./models";

function calculateRequiredPlates(weight: number, barbellWeight = 45): PlateResult[]
{

    const WEIGHT_VALUES = [
        45,
        35,
        25,
        15,
        10,
        5,
        2.5
    ];

    let results: PlateResult[] = [];
    let barbellGoal = weight - barbellWeight;

    for(let i  = 0; i < WEIGHT_VALUES.length; i++)
    {
        let count = Math.floor(barbellGoal / (WEIGHT_VALUES[i] * 2));
        count *= 2;

        results.push({
            weight: WEIGHT_VALUES[i],
            count
        });
        
        barbellGoal -= WEIGHT_VALUES[i] * count;
    }

    return results;
}

export { calculateRequiredPlates }