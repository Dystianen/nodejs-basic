const intialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i = 0; i <= 1000; i++){
    //Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environtment: ${environment}`);
console.log(`Penggunaan memori dari ${intialMemoryUsage} naik ke ${currentMemoryUsage}`)