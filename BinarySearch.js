// Q. Find number in an array using binary Search

binarySort = (arr,start,end,num)=>{
       
       while(end>=start){
           let mid = Math.round(start + end) / 2
           if(num == arr[mid])  return mid + 1
           if(num > arr[mid])   return binarySort(arr, mid + 1 , end, num)
           if(num < arr[mid])   return binarySort(arr, start , mid - 1, num) 
       }
       return false 
}
console.log(binarySort([1,2,3,4,5,6],0,6,3))

function funAbc(arr,n){
    let x;
    if(n==1) return console.log("a",arr[0]);
    else x= funAbc(arr,n-1);
    if(x> arr[n-1]) return console.log("c",x);
    else return console.log("d",arr[n-1]);
}

funAbc([12,10,30,50,100],5)
