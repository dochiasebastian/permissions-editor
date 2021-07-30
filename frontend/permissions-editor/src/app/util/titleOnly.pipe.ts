import { Pipe, PipeTransform } from '@angular/core';

/*
 * Print only the title from an object
 * If the object has no title prop, it will print the shortest string prop
 * Usage:
 *   object | titleOnly
 * Example:
 *   {{ permission | titleOnly }}
 *   formats to: Sell your data
*/
@Pipe({name: 'titleOnly'})
export class TitleOnlyPipe implements PipeTransform {
  transform(object: object): string {
    if('title' in object && typeof (object as any).title === "string") {
        return (object as any).title;
    }

    const allProps = Object.values(object);
    const allStringProps: string[] = allProps.filter(prop => typeof prop === "string");

    const shortestString = allStringProps.reduce((a, b) => a.length <= b.length ? a : b);

    return shortestString;
  }
}