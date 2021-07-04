const colors = require("tailwindcss/colors");
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

const sizing = require("./sizing");
const lightsyntax = require("./lightsyntax");
const darksyntax = require("./darksyntax");

const radix = {
  slate1: "#fbfcfd",
  slate2: "#f8f9fa",
  slate3: "#f1f3f5",
  slate4: "#eceef0",
  slate5: "#e6e8eb",
  slate6: "#dfe3e6",
  slate7: "#d7dbdf",
  slate8: "#c1c8cd",
  slate9: "#889096",
  slate10: "#7e868c",
  slate11: "#687076",
  slate12: "#11181c",
  slateD1: "#151718",
  slateD2: "#1a1d1e",
  slateD3: "#202425",
  slateD4: "#26292b",
  slateD5: "#2b2f31",
  slateD6: "#313538",
  slateD7: "#3a3f42",
  slateD8: "#4c5155",
  slateD9: "#697177",
  slateD10: "#787f85",
  slateD11: "#9ba1a6",
  slateD12: "#ecedee",
  sky1: "#f9feff",
  sky2: "#f1fcff",
  sky3: "#e4f9ff",
  sky4: "#d5f4fd",
  sky5: "#c1ecf9",
  sky6: "#a4dff1",
  sky7: "#79cfea",
  sky8: "#2ebde5",
  sky9: "#68ddfd",
  sky10: "#5fd4f4",
  sky11: "#0078a1",
  sky12: "#003242",
  skyD1: "#0c1820",
  skyD2: "#071d2a",
  skyD3: "#082636",
  skyD4: "#082d41",
  skyD5: "#08354c",
  skyD6: "#083e59",
  skyD7: "#064b6b",
  skyD8: "#005d85",
  skyD9: "#68ddfd",
  skyD10: "#8ae8ff",
  skyD11: "#2ec8ee",
  skyD12: "#eaf8ff",
};

module.exports = (theme) => ({
  DEFAULT: {
    css: [
      {
        color: radix["slate11"],
        maxWidth: "85ch",

        strong: {
          color: radix["slate12"],
          fontWeight: "600",
        },
        'ol[type="A"]': {
          "--list-counter-style": "upper-alpha",
        },
        'ol[type="a"]': {
          "--list-counter-style": "lower-alpha",
        },
        'ol[type="A" s]': {
          "--list-counter-style": "upper-alpha",
        },
        'ol[type="a" s]': {
          "--list-counter-style": "lower-alpha",
        },
        'ol[type="I"]': {
          "--list-counter-style": "upper-roman",
        },
        'ol[type="i"]': {
          "--list-counter-style": "lower-roman",
        },
        'ol[type="I" s]': {
          "--list-counter-style": "upper-roman",
        },
        'ol[type="i" s]': {
          "--list-counter-style": "lower-roman",
        },
        'ol[type="1"]': {
          "--list-counter-style": "decimal",
        },
        "ol > li": {
          position: "relative",
        },
        "ol > li::before": {
          content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
          position: "absolute",
          fontWeight: "400",
          color: radix["slate12"],
        },
        "ul > li": {
          position: "relative",
        },
        "ul > li::before": {
          content: '""',
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: radix["slate12"],
        },
        hr: {
          borderColor: radix["slate6"],
          borderTopWidth: 2,
        },
        blockquote: {
          fontWeight: "500",
          fontSize: rem(18),
          textAlign: "center",
          color: radix["slate11"],
        },

        "blockquote::before, blockquote::after": {
          content: '""',
          display: "block",
          margin: "0px auto",
          width: "5rem",
          borderTop: "2px solid rgba(0,0,0,0.1)",
        },
        h1: {
          color: radix["slate12"],
          fontWeight: "800",
        },
        "h1 strong": {
          fontWeight: "900",
        },
        h2: {
          color: radix["slate12"],
          fontWeight: "700",
        },
        "h2 strong": {
          fontWeight: "800",
        },
        h3: {
          color: radix["slate12"],
          fontWeight: "600",
        },
        "h3 strong": {
          fontWeight: "700",
        },
        h4: {
          color: radix["slate12"],
          fontWeight: "600",
        },
        "h4 strong": {
          fontWeight: "700",
        },
        "figure figcaption": {
          color: radix["slate11"],
          textAlign: "center",
        },
        code: {
          color: radix["slate11"],
          fontWeight: "500",
          backgroundColor: radix["slate3"],
          padding: "2px 4px",
          borderRadius: rem(2),
        },
        a: {
          color: radix["slate11"],
          borderBottom: "1px dashed",
          borderBottomColor: radix["slate11"],
          fontWeight: "500",
          transition: "all 300ms ease 0s",
        },
        "a:hover": {
          backgroundColor: radix["sky3"],
        },
        "a code": {
          borderBottom: "1px dashed",
          borderBottomColor: radix["slate11"],
          transition: "all 300ms ease 0s",
        },
        "a code:hover": {
          backgroundColor: "rgb(224,242,254)",
        },
        pre: {
          color: radix["slate11"],
          backgroundColor: radix["slate3"],
          borderColor: `${radix["slate6"]} !important`,
          border: "solid",
          borderWidth: "1px",
          overflowX: "auto",
        },
        "pre code": {
          backgroundColor: "transparent",
          borderWidth: "0",
          borderRadius: "0",
          padding: "0",
          fontWeight: "400",
          color: "inherit",
          fontSize: "inherit",
          fontFamily: "inherit",
          lineHeight: "inherit",
        },
        "pre code::before": {
          content: "none",
        },
        "pre code::after": {
          content: "none",
        },
        table: {
          width: "100%",
          tableLayout: "auto",
          textAlign: "left",
          marginTop: em(32, 16),
          marginBottom: em(32, 16),
          border: "1px solid",
          borderColor: radix["slate6"],
        },
        thead: {
          color: radix["sky11"],
          fontWeight: "600",
          borderBottomWidth: "1px",
          borderBottomColor: radix["slate7"],
          backgroundColor: radix["slate3"],
        },
        "thead th": {
          verticalAlign: "bottom",
          padding: "6px",
        },
        "tbody tr": {
          borderBottomWidth: "1px",
          borderBottomColor: radix["slate6"],
        },
        "tbody tr:last-child": {
          borderBottomWidth: "0",
        },
        "tbody td": {
          verticalAlign: "top",
        },
      },
      sizing,
      lightsyntax,
      {
        "> :first-child": {
          marginTop: "0",
        },
        "> :last-child": {
          marginBottom: "0",
        },
      },
    ],
  },
  light: {
    css: [
      {
        color: radix["slateD12"],
        strong: {
          color: colors.white,
        },
        hr: {
          borderColor: "rgba(255,255,255,0.4)",
        },
        blockquote: {
          color: radix["slateD12"],
        },
        "ul > li::before": {
          backgroundColor: radix["slateD12"],
        },
        "ol > li::before": {
          color: radix["slateD12"],
        },

        "blockquote::before, blockquote::after": {
          borderTop: "2px solid rgba(255,255,255,0.4)",
        },
        h1: {
          color: radix["slateD12"],
        },
        h2: {
          color: radix["slateD12"],
        },
        h3: {
          color: radix["slateD12"],
        },
        h4: {
          color: radix["slateD12"],
        },
        "figure figcaption": {
          color: radix["slateD11"],
        },
        code: {
          color: radix["slateD12"],
          backgroundColor: radix["slateD3"],
        },
        pre: {
          color: radix["slateD12"],
          backgroundColor: radix["slateD3"],
          borderColor: `${radix["slateD6"]} !important`,
        },
        a: {
          color: radix["slateD12"],
          borderBottomColor: radix["slateD11"],
        },
        "a:hover": {
          backgroundColor: radix["skyD4"],
        },
        "a code": {
          borderBottomColor: radix["slateD11"],
        },
        "a code:hover": {
          backgroundColor: radix["skyD4"],
        },
        thead: {
          color: radix["skyD11"],
          borderBottomColor: radix["slateD7"],
          backgroundColor: radix["slateD3"],
        },
        "tbody tr": {
          borderBottomColor: radix["slateD6"],
        },
        table: {
          borderColor: radix["slateD6"],
        },
        '[class="token attr-name"]': {
          color: "#a8ff60",
        },
        ...darksyntax,
      },
      ,
    ],
  },
  serif: {
    css: [
      {
        color: radix["slate12"],

        fontFamily: theme("fontFamily.serif").toString(),
        h1: {
          fontStyle: "italic",
          fontWeight: "normal",
        },
        h2: {
          fontStyle: "italic",
          fontWeight: "normal",
        },
        h3: {
          fontStyle: "italic",
          fontWeight: "normal",
        },
        h4: {
          fontStyle: "italic",
          fontWeight: "normal",
        },
        "blockquote::before, blockquote::after": {
          all: "unset",
        },
        blockquote: {
          fontWeight: "500",
          fontSize: rem(18),
          textAlign: "left",
          color: radix["slate12"],
          marginLeft: rem(40),
          fontStyle: "italic",
        },
        a: {
          borderBottom: "1px solid",
          color: radix["slate12"],
        },
        "a:hover": {
          backgroundColor: "unset",
        },
        code: {
          color: radix["slate12"],
          backgroundColor: "unset",
          padding: "unset",
        },
        pre: {
          color: radix["slate12"],
          backgroundColor: "transparent",
          borderColor: `${radix["slate12"]} !important`,
          borderRadius: "unset",
        },
        table: {
          borderWidth: "0",
        },
        "tbody tr": {
          borderBottomWidth: "0",
        },
        thead: {
          color: radix["slate12"],
          borderBottomColor: radix["slate12"],
          backgroundColor: "unset",
        },
        "a code": {
          borderBottom: "unset",
          transition: "all 300ms ease 0s",
        },
        "a code:hover": {
          backgroundColor: "unset",
        },
      },
    ],
  },
  serifLight: {
    css: [
      {
        pre: {
          backgroundColor: "transparent",
        },
        code: {
          backgroundColor: "transparent",
        },
        thead: {
          color: radix["slateD12"],
          borderBottomColor: radix["slateD12"],
          backgroundColor: "unset",
        },
      },
    ],
  },
});
