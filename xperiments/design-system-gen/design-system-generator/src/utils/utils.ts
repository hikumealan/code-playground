import { v4 as uuidv4 } from 'uuid';

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function uuid(): string {
  return uuidv4();
}

