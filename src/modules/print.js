function submain() {
  console.log('sub app');
  return Promise.resolve('sub foo');
}

submain().then(data => console.log(data))