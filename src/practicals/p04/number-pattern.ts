const args = process.argv.slice(2);
const size = parseInt(args[0]);

if (!isNaN(size) && size > 0) {

    for (let i = 0; i < size; i++) {
        
        const count = size - i;
        
      
        const row = Array.from({ length: count }, (_, j) => {
      
            return j + 1;
        }).join("");
        
      
        console.log(row);
    }
}