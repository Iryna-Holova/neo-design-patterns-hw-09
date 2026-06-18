import { DataExporter } from './DataExporter';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';

export class CsvExporter extends DataExporter {
  protected render(): string {
    const header = 'id,name,email,phone';
    const rows = this.data.map(
      ({ id, name, email, phone }) => `${id},${name},${email},${phone}`,
    );
    return [header, ...rows].join('\n');
  }

  protected save(): void {
    const outputPath = 'dist/users.csv';
    const dir = dirname(outputPath);

    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    writeFileSync(outputPath, this.result, 'utf-8');
  }
}
