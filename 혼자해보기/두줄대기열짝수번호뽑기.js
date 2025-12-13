function solution(queue1, queue2, k) {
    const queue = [...queue1,...queue2]
    const result = []
    while(result.length  < k && queue.length > 0){
        const person = queue.shift()
        // 짝수일 때
        if(person % 2 === 0) {
            result.push(person)
        }
        
        // 홀수일 때
        if(person % 2 !== 0) {
            queue.push(person)
        }
    }
    
    return result
}


console.log(solution([1,3,4],[6,5,8],3)) // 4,6,8
