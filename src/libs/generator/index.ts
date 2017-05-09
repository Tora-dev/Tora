import markdownGenerator from './markdown';
import htmlencoderGenerator from './htmlencoder';

export type generator = (source: string, option: any) => string;

const defaultGenerator = htmlencoderGenerator;

export interface GeneratorsI {
  [key: string]: generator;
}

export const generators: GeneratorsI = {
  markdown: markdownGenerator,
  text: htmlencoderGenerator
};

export function registerGenerate(type: string, generator: generator) {
  generators[type] = generator;
}

export function doGenerate(source: string, sourceType: string, option: any = {}) {
  const generator = generators[sourceType] || defaultGenerator;
  return generator(source, option);
}
