const myArgs = process.argv.slice(2);


const timer = array => {
  for (let timeout of array) {

    if (timeout === undefined || isNaN(timeout) || Number(timeout) < 0) {
      return;
    }

    setTimeout(() => { 
      process.stdout.write('\x07');
    }, timeout*1000)
  }
}

timer(myArgs);

