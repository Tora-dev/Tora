const htmlencoder = require('../htmlencoder');

export default function htmlencoderGenerator(source: string): string {
  return htmlencoder.htmlEncode(source, true);
}
