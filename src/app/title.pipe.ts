import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string): string {
    const wordsList = value.split(" ")
    const prepositionList = ["the", "of", "a", "an", "and", "to"]

    return wordsList.map((word, index) => (
      prepositionList.includes(word.toLowerCase()) && index != 0 
        ? word.toLowerCase() 
        : word.substr(0, 1).toUpperCase() + word.slice(1).toLowerCase() 
    )).join(" ")
  }

}
