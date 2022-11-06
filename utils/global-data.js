export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : '泠境';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Perception of the Infinity.';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : "Created by VastCosmic \n 桂ICP备2022009562号 桂公网安备45090202000394号";
  return {
    name,
    blogTitle,
    footerText,
  };
};
