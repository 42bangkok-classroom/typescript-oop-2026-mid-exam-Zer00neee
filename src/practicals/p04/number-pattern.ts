const args = process.argv.slice(2);
const size = parseInt(args[0]);

if (!isNaN(size) && size > 0) {

    for (let i = 1; i <= size; i++) {
        
      
    
        const spaces = " ".repeat(size - i);
   
        const row = Array.from({ length: i }, (_, j) => {
            return i - j;
        }).join("");
        
        
        console.log(spaces + row);
    }
}