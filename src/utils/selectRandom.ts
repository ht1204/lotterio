
type ResultType = {
    result: Array<string>;
};

interface selectRandomParams{
    items: Array<string>;
    amountWinners: number;
}

export const selectRandom = ({ items, amountWinners }: selectRandomParams): ResultType => {
    let result: Array<string> = [];
    let arr: Array<string> = [];

    for(let i = 0; i < amountWinners; i++){
       arr = items.filter(item => !result.includes(item));
       if (arr.length) items = arr;
       result = [...result, arr[Math.floor(Math.random() * arr.length)]];
    }

    return {
        result,
    }
}