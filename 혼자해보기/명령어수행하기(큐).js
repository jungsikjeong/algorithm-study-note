function solution(commands) {
  const queue = [];
  const result = [];

  for (const command of commands) {
    const [commandStr, value] = command.split(" ");

    if (commandStr === "ENQUEUE") queue.push(Number(value));

    if (commandStr === "DEQUEUE") {
      if (queue.length === 0) {
        result.push(queue.length ? queue.shift() : "EMPTY");
      }
      result.push(res);
    }
  }

  return result;
}

console.log(
  solution(["ENQUEUE 3", "ENQUEUE 5", "DEQUEUE", "DEQUEUE", "DEQUEUE"])
);
