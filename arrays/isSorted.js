function isSorted(arr) {
    let asc = true, desc = true;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) asc = false;
        if (arr[i] > arr[i - 1]) desc = false;
    }

    return asc || desc;
}


let arr=[1,1,1,1,1,2,3,1]
console.log(isSorted(arr))