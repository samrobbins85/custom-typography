const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

const sizing = {
  fontSize: rem(18),
  lineHeight: round(32 / 18),
  p: {
    marginTop: em(24, 18),
    marginBottom: em(24, 18),
  },
  '[class~="lead"]': {
    fontSize: em(22, 18),
    lineHeight: round(32 / 22),
    marginTop: em(24, 22),
    marginBottom: em(24, 22),
  },
  blockquote: {
    marginTop: em(40, 24),
    marginBottom: em(40, 24),
    paddingLeft: em(24, 24),
  },
  h1: {
    fontSize: em(48, 18),
    marginTop: "0",
    marginBottom: em(40, 48),
    lineHeight: round(48 / 48),
  },
  h2: {
    fontSize: em(30, 18),
    marginTop: em(56, 30),
    marginBottom: em(32, 30),
    lineHeight: round(40 / 30),
  },
  h3: {
    fontSize: em(24, 18),
    marginTop: em(40, 24),
    marginBottom: em(16, 24),
    lineHeight: round(36 / 24),
  },
  h4: {
    marginTop: em(32, 18),
    marginBottom: em(8, 18),
    lineHeight: round(28 / 18),
  },
  img: {
    marginTop: em(32, 18),
    marginBottom: em(32, 18),
  },
  video: {
    marginTop: em(32, 18),
    marginBottom: em(32, 18),
  },
  figure: {
    marginTop: em(32, 18),
    marginBottom: em(32, 18),
  },
  "figure > *": {
    marginTop: "0",
    marginBottom: "0",
  },
  "figure figcaption": {
    fontSize: em(16, 18),
    lineHeight: round(24 / 16),
    marginTop: em(16, 16),
  },
  code: {
    fontSize: em(16, 18),
  },
  "h2 code": {
    fontSize: em(26, 30),
  },
  "h3 code": {
    fontSize: em(21, 24),
  },
  pre: {
    fontSize: em(16, 18),
    lineHeight: round(28 / 16),
    marginTop: em(32, 16),
    marginBottom: em(32, 16),
    borderRadius: rem(6),
    paddingTop: em(16, 16),
    paddingRight: em(24, 16),
    paddingBottom: em(16, 16),
    paddingLeft: em(24, 16),
  },
  ol: {
    marginTop: em(24, 18),
    marginBottom: em(24, 18),
  },
  ul: {
    marginTop: em(24, 18),
    marginBottom: em(24, 18),
  },
  li: {
    marginTop: em(12, 18),
    marginBottom: em(12, 18),
  },
  "ol > li": {
    paddingLeft: em(30, 18),
  },
  "ol > li::before": {
    left: "0",
  },
  "ul > li": {
    paddingLeft: em(30, 18),
  },
  "ul > li::before": {
    width: em(6, 18),
    height: em(6, 18),
    top: `calc(${em(32 / 2, 18)} - ${em(3, 18)})`,
    left: em(4, 18),
  },
  "> ul > li p": {
    marginTop: em(16, 18),
    marginBottom: em(16, 18),
  },
  "> ul > li > *:first-child": {
    marginTop: em(24, 18),
  },
  "> ul > li > *:last-child": {
    marginBottom: em(24, 18),
  },
  "> ol > li > *:first-child": {
    marginTop: em(24, 18),
  },
  "> ol > li > *:last-child": {
    marginBottom: em(24, 18),
  },
  "ul ul, ul ol, ol ul, ol ol": {
    marginTop: em(16, 18),
    marginBottom: em(16, 18),
  },
  hr: {
    marginTop: em(56, 18),
    marginBottom: em(56, 18),
  },
  "hr + *": {
    marginTop: "0",
  },
  "h2 + *": {
    marginTop: "0",
  },
  "h3 + *": {
    marginTop: "0",
  },
  "h4 + *": {
    marginTop: "0",
  },
  table: {
    fontSize: em(16, 18),
    lineHeight: round(24 / 16),
  },
  "thead th": {
    paddingRight: em(12, 16),
    paddingLeft: em(12, 16),
  },
  "thead th:first-child": {
    paddingLeft: "0.5rem",
  },
  "thead th:last-child": {
    paddingRight: "0.5rem",
  },
  "tbody td": {
    paddingTop: em(12, 16),
    paddingRight: em(12, 16),
    paddingBottom: em(12, 16),
    paddingLeft: em(12, 16),
  },
  "tbody td:first-child": {
    paddingLeft: "0.5rem",
  },
  "tbody td:last-child": {
    paddingRight: "0.5rem",
  },
};

module.exports = sizing;
