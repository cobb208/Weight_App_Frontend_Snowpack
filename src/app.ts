import PlateResult from "./models";
import { calculateRequiredPlates } from "./funcs";

const barbellForm = document.getElementById('barbellForm');
const targetWeight = document.getElementById('targetWeightInput') as HTMLInputElement;
const barbellWeight = document.getElementById('barbellWeight') as HTMLInputElement;
const resultsBody = document.getElementById('resultsBody') as HTMLElement;

if(barbellForm && targetWeight && barbellWeight && resultsBody)
{
    barbellForm?.addEventListener('submit', (e: Event) => {
        e.preventDefault();
    
        let results: PlateResult[] = calculateRequiredPlates(parseInt(targetWeight.value), parseInt(barbellWeight.value));

        const returnHTML = document.createElement('tr');
        const tWeight = document.createElement('td');
        tWeight.innerHTML = targetWeight.value;
        const bWeight = document.createElement('td');
        bWeight.innerHTML = barbellWeight.value;

        returnHTML.append(tWeight);
        returnHTML.append(bWeight);

        results.forEach(result => {
            const resultEle = document.createElement('td');
            resultEle.innerHTML = result.count.toString();
            returnHTML.append(resultEle);
        });

        resultsBody.append(returnHTML);
    
    });
}

