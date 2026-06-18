import { readFileSync } from 'fs';
import { UserData } from '../data/UserData';
import { XMLParser } from 'fast-xml-parser';

export class XmlIterator implements Iterable<UserData> {
  constructor(private filePath: string) {}

  [Symbol.iterator](): Iterator<UserData> {
    const fileContent = readFileSync(this.filePath, 'utf-8');
    const parser = new XMLParser();
    const jsonObj = parser.parse(fileContent);
    const users: UserData[] = jsonObj.users.user.map((user: any) => ({
      id: Number(user.id),
      name: user.name,
      email: user.email,
      phone: user.phone,
    }));
    let index = 0;

    return {
      next: (): IteratorResult<UserData> => {
        if (index < users.length) {
          const user = users[index];
          index++;
          return { value: user, done: false };
        } else {
          return { value: null, done: true };
        }
      },
    };
  }
}
