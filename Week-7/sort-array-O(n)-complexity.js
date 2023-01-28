
function  bubbleSort(arr){
    let i=0, temp;
    let j = arr.length-1;

    while(i<arr.length){
        if(i==j){
            break;
        }

        //swap
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr [j]
            arr[j] = temp;
        }

        if(j== i+1){
            i++;
            j = arr.length-1;
        }else{
            j--;
        }
        
    }

    return arr;
}

console.log(bubbleSort([0,2,1,2,0,3,7]));

//Time complexity : O(n)
//Space complexity : O(1)