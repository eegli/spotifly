/* eslint-disable no-self-assign */
/* eslint-disable no-undef */

const regexes = {
  base: /^(?:\w)+\s[\w@\/-]+/g,
  flagWithArg: /(?<=--)\w+(?=\s[\w"'])/g,
  flagArgs: /(?<=\w\s)(?:\w+-?)+\b/g,
  flagBools: /(?<=--)\w+((?=\s--)|\b$)/g,
};

// I have no clue how prism works or how to write a new language
// definition. This is just meshed together to bring some colors into
// npx commands
// https://docusaurus.io/docs/markdown-features/code-blocks#theming
(function (Prism) {
  Prism.languages.npx = {
    constant: regexes.base,
    selector: regexes.flagWithArg,
    function: regexes.flagBools,
  };

  Prism.languages.npx = Prism.languages.npx;
})(Prism);
