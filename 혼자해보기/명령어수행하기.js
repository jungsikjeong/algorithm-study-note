function solution(commands) {
  const queue = []
  const result = []

  commands.forEach((command) => {
    const [str, value] = command.split(" ");
    if(str === 'ENQUEUE') queue.push(Number(value))

    if(str === 'DEQUEUE') {
        if(!queue.length) {
          result.push('EMPTY')
          return   
        }
        
          result.push( queue.shift())
      }
  });

  return result
}

console.log(
  solution(["ENQUEUE 3", "ENQUEUE 5", "DEQUEUE", "DEQUEUE", "DEQUEUE"])
);
