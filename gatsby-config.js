const path = require("path")
module.exports = {
  siteMetadata: {
    title: "Dareks Page",
    description: "some stuff",
    adress: ["Lorem Strasse 28", "51381 Leverkusen"],
    telephone: ["Telefon: 02171 - 12 54 56 43", "Mobil: 01520 - 32 36 543"],
    contact: ["info@contact-me.com"],
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "Offer",
        path: path.join(__dirname, "src", "Offer"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
  ],
}
