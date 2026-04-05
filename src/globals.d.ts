// CSS module declarations for all .css files
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Slick carousel CSS declarations
declare module "slick-carousel/slick/slick.css" {
  const content: void;
  export default content;
}

declare module "slick-carousel/slick/slick-theme.css" {
  const content: void;
  export default content;
}
