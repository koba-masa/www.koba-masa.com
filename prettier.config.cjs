module.exports = {
  plugins: [
    require.resolve("prettier-plugin-astro"),
    "@trivago/prettier-plugin-sort-imports",
  ],
  overrides: [
    {
    files: "*.astro",
    options: {
      parser: "astro",
    },
    },
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};
