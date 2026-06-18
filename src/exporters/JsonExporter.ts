import { DataExporter } from './DataExporter';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';

export class JsonExporter extends DataExporter {
  protected render(): string {
    return JSON.stringify(this.data, null, 2);
  }

  protected save(): void {
    const outputPath = 'dist/users.json';
    const dir = dirname(outputPath);

    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    writeFileSync(outputPath, this.result, 'utf-8');
  }
}
