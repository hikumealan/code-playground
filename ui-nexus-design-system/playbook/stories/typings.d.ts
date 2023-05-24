declare module '*.mdx' {
  const content: string;
  export default content;
}

declare module '*.html' {
  const content: any;
  export default content;
}

declare module '*.ts' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*' {
  const content: any;
  export default content;
}