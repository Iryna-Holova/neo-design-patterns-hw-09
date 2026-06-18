import { readFileSync } from 'fs';
import { UserData } from '../data/UserData';

export class JsonIterator implements Iterable<UserData> {
  constructor(private filePath: string) {}

  [Symbol.iterator](): Iterator<UserData> {
    const fileContent = readFileSync(this.filePath, 'utf-8');
    const data: UserData[] = JSON.parse(fileContent);
    let index = 0;

    return {
      next: (): IteratorResult<UserData> => {
        if (index < data.length) {
          const user = data[index];
          index++;
          return { value: user, done: false };
        } else {
          return { value: null, done: true };
        }
      },
    };
  }
}
