import { readFileSync } from 'fs';
import { UserData } from '../data/UserData';

export class CsvIterator implements Iterable<UserData> {
  constructor(private filePath: string) {}

  [Symbol.iterator](): Iterator<UserData> {
    const fileContent = readFileSync(this.filePath, 'utf-8');
    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');
    let index = 1;

    return {
      next: (): IteratorResult<UserData> => {
        if (index < lines.length) {
          const [id, name, email, phone] = lines[index].split(',');
          index++;
          return {
            value: { id: Number(id), name, email, phone },
            done: false,
          };
        } else {
          return { value: null, done: true };
        }
      },
    };
  }
}
