const config = {
  siteTitle: "New York Jets Gatsby", // Site title.
  siteTitleShort: "NYJ Gatsby", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Gatsby New York Jets", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/nyj-gatsby", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A GatsbyJS for the New York Jets, built for practice.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "New York Jets Gatsby RSS feed", // Title of the RSS feed
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-nyj-gatsby", // Disqus shortname.
  dateFromFormat: "MM-DD-YYYY", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY", // Date format for display.
  userName: "brunojoey", // Username to display in the author segment.
  userEmail: "brunojoey12@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "brunojoey", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Tennessee", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "I am Joey! A sad, sad New York Jets fan who is learning web development. I wanted to learn Gatsby in some form. So, here I am making a website about the New York Jets, who happen to cause me great pain.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/brunojoey/jets-gatsby",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/brunojoey",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/brunojoey",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Facebook",
      url: "https://facebook.com/brunojoey",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Email",
      url: "mailto:brunojoey12@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2020. Joey Bruno. A Sad Jets Fan", // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
