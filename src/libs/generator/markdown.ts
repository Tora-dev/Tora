import * as marked from 'marked';

export default function markdownGenerator(source: string): string {
  return marked(source);
}
