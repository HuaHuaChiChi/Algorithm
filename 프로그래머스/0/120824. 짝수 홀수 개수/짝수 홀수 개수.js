function solution(num_list) {
    const even = num_list.filter(item=> item % 2 == 0);
    const odd = num_list.filter(item=> item % 2 == 1);
    const answer = [even.length, odd.length]; 
    return answer;
}