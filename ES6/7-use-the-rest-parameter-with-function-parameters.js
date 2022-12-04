const sum = (...args) => {
  console.log(args)
  // const args = argss;
  return args.reduce((a, b) => a + b, 0);
}