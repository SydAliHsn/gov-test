import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ fontSize: '1.75rem', fontWeight: '600' }}> Govsites</ span>,
  project: {
    link: "https://github.com/capex/govsites",

  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/capex/govsites/tree/main/",
  footer: {
    text: "© Cumulative Consulting Pty Ltd - 2023. All rights reserved.",
  },
  editLink: {
    text: "Edit this page on Github",
  },
};

export default config;
