import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPackages'
})
export class SearchPackagesPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    return pipeData.filter(eachItem => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['description'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
