//process.stdout.write('hello from spinner1.js... \rheyyy\n');

let time = 100;

let arr = ['|','/','-','\\','|','/','-','\\','|']

for( let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${arr[i]}   `);
  }, time);
  time += 200;
}

