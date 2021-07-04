const syntax = {
  '[class~="comment"],[class~="prolog"],[class~="doctype"],[class~="cdata"]': {
    color: "#7c7c7c",
  },
  '[class~="punctuation"]': {
    color: "#c5c8c6",
  },
  ".namespace": {
    opacity: "0.7",
  },
  '[class~="property"],[class~="keyword"],[class~="tag"]': {
    color: "#96cbfe",
  },
  '[class~="class-name"]': {
    color: "#ffffb6",
  },

  '[class~="boolean"],[class~="constant"]': {
    color: "#99cc99",
  },

  '[class~="symbol"],[class~="deleted"]': {
    color: "#f92672",
  },

  '[class~="number"]': {
    color: "#ff73fd",
  },

  '[class~="selector"],[class~="string"],[class~="char"],[class~="builtin"],[class~="inserted"]':
    {
      color: "#a8ff60",
    },

  '[class~="attr-name"]': {
    color: "#a8ff60",
  },

  '[class~="variable"]': {
    color: "#c6c5fe",
  },

  '[class~="operator"]': {
    color: "#ededed",
  },

  '[class~="entity"]': {
    color: "#ffffb6",
    cursor: "help",
  },

  '[class~="url"]': {
    color: "#96cbfe",
  },

  '[class~="atrule"],[class~="attr-value"]': {
    color: "#f9ee98",
  },

  '[class~="function"]': {
    color: "#dad085",
  },

  '[class~="regex"]': {
    color: "#e9c062",
  },

  '[class~="important"]': {
    color: "#fd971f",
  },

  '[class~="important"],[class~="bold"]': {
    fontWeight: "bold",
  },

  '[class~="italic"]': {
    fontStyle: "italic",
  },
};

module.exports = syntax;
