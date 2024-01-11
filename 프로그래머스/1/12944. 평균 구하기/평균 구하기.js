function solution(arr) {
    var answer = 0;
    let arrLength = arr.length
    for (let i = 0; i < arrLength; i++){
        answer +=  arr[i]
        
    }return answer / arrLength;
}