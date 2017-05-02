export default function mongodbURL(
  host: string = 'localhost',
  port: number = 27017,
  table: string = 'Tora'
  ) {
  return `mongodb://${host}:${port}/${table}`;
}
