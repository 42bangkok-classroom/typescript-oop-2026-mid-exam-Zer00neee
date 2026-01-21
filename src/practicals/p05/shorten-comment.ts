const comment = "TypeScript is a strongly typed programming language"

- function filterWordsByLength(comment: string): string {
  
  const words = comment.split(" ");
      
      
      const filteredWords = words.filter(word => {
      const length = word.length;
      return length >= 5 && length <= 10;
      });
      
     
      return filteredWords.join(" ");
      }