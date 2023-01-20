/* Using Async/Await and Generators, create separate functions and achieve the same functionality.
Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3().

Guidelines:1. 2 functions should be created. One for Async/Await and the other one for Generators.
2. 3rd party libraries should not be used.
3. Custom Function should carry a meaningful name.
4. The program should execute without errors.
5. The program should achieve the desired result.
6. The program should take care of all 3 states of a Promise.
7. Should be committed to Git with meaningful commit messages */


function* generatorsFun() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
  yield 8;
  yield 9;
  yield 10;
}

let generatorVar = generatorsFun();

function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
    console.log("resolved");
    console.log(generatorVar.next().value);
  });
}

let arrayOfPromises = [promise(), promise(), promise(), promise(), promise()];

async function main() {
  for (let i = 0; i < arrayOfPromises.length; i++) {
    await arrayOfPromises[i];
  }
  //await p2;

  //console.log(arrayOfPromises);
}

main();
