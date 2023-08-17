import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ fontSize: '1.75rem', fontWeight: '600' }}> Govsites</ span>,
  project: {
    link: "https://govsites.com.au",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "© Cumulative Consulting Pty Ltd - 2023. All rights reserved.",
  },
};

export default config;
