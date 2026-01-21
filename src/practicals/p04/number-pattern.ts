// Write your code below
const args = process.argv.slice(2);
const size = parseInt(args[0]);

if (!isNaN(size) && size > 0) {
    for (let i = 0; i < size; i--) {
        
        const count = size - i;
   
        const row = Array.from({ length: count }, (_, j) => {
         
            return count - j;
        }).join("");
        
   
        console.log(row);
    }
}