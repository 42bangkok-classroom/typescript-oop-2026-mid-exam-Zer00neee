const args = process.argv.slice(2);
const size = parseInt(args[0]);

if (!isNaN(size) && size > 0) {
   
    const maxRow = Array.from({ length: size }, (_, j) => size - j).join("");
    const maxWidth = maxRow.length;
    
 
    for (let i = 1; i <= size; i++) {
     
        const row = Array.from({ length: i }, (_, j) => i - j).join("");
        
       
        const spaces = " ".repeat(maxWidth - row.length);
        
        console.log(spaces + row);
    }
}