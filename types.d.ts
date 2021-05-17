declare module "*.css" {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module "*.png" {
  export default "" as string;
}

declare module "*.jpg" {
  export default "" as string;
}

declare module "*.jpeg" {
  export default "" as string;
}

declare module "*.svg" {
  export default "" as string;
}
