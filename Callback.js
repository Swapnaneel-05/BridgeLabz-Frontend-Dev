function wait(step) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(step);
      resolve();
    }, 1000);
  });
}

async function runPipeline() {
  await wait("Design complete");
  await wait("Build complete");
  await wait("Testing complete");
  await wait("Deploy complete");
  await wait("Celebrate!");
  console.log("Pipeline completed!");
}

runPipeline();
