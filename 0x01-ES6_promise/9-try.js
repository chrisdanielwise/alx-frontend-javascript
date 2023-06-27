// export default function guardrail(mathFunction) {
//   const queue = [];

//   try {
//     const result = mathFunction();
//     queue.push(result);
//   } catch (error) {
//     queue.push(error.message);
//   } finally {
//     queue.push('Guardrail was processed');
//   }

//   return queue;
// }

function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}

export default guardrail;
