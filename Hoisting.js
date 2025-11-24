function outer() {
  console.log(count); // undefined
  var count = 5;

  const inner = () => {
    // no local var here, so it will access outer count
    console.log(count); // prints 5
  };

  inner();
}
outer();
