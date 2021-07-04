const plugin = require("tailwindcss/plugin");
const merge = require("lodash.merge");
const castArray = require("lodash.castarray");
const uniq = require("lodash.uniq");
const styles = require("./styles");

function configToCss(config = {}) {
  return merge(
    {},
    ...Object.keys(config).map((key) => config[key]),
    ...castArray(config.css || {})
  );
}

module.exports = plugin.withOptions(
  ({ modifiers, className = "prose" } = {}) => {
    return function ({ addComponents, theme, variants }) {
      const DEFAULT_MODIFIERS = ["DEFAULT", "sm", "lg", "xl", "2xl"];
      modifiers = modifiers === undefined ? DEFAULT_MODIFIERS : modifiers;
      const config = theme("typography");

      const all = uniq([
        "DEFAULT",
        ...modifiers,
        ...Object.keys(config).filter(
          (modifier) => !DEFAULT_MODIFIERS.includes(modifier)
        ),
      ]);

      addComponents(
        all.map((modifier) => ({
          [modifier === "DEFAULT"
            ? `.${className}`
            : `.${className}-${modifier}`]: configToCss(config[modifier]),
        })),
        variants("typography")
      );
    };
  },
  () => ({
    theme: { typography: styles },
    variants: { typography: ["responsive"] },
  })
);
