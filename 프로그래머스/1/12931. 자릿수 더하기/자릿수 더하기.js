function solution(n)
{
    var answer = 0;
    arr = String(n);
  for ( let i = 0; i < arr.length; i++) {
        answer += Number(arr[i]);
    }
    return answer;
}