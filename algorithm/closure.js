const someFn = () => {
  const secret = "secret";
  return () => secret;
};

const getSecret = someFn();
console.log(getSecret());
