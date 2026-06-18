import { DataExporter } from './DataExporter';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';

export class XmlExporter extends DataExporter {
  protected render(): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const xmlUsers = this.data
      .map(
        ({ id, name, email, phone }) => `
  <user>
    <id>${id}</id>
    <name>${name}</name>
    <email>${email}</email>
    <phone>${phone}</phone>
  </user>`,
      )
      .join('');

    return `${xmlHeader}\n<users>${xmlUsers}\n</users>`;
  }

  protected override afterRender(): void {
    this.result += `\n<!-- Експорт згенеровано: ${new Date().toISOString()} -->`;
  }

  protected save(): void {
    const outputPath = 'dist/users.xml';
    const dir = dirname(outputPath);

    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    writeFileSync(outputPath, this.result, 'utf-8');
  }
}
