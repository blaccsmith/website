# Writing a blog for BLACC

Thanks for wanting to share **your unique experiences and insights** with the rest of the community! We've made a sandbox for you to write and view your blog so let's go through how it works 🚀

## Setup

Either clone the [**staging branch**](https://github.com/blaccsmith/website/tree/staging) or click [here](https://gitpod.io/#github.com/blaccsmith/website/tree/staging) to open a Gitpod workspace to start blogging in the cloud 🤩

Run `yarn` to install dependencies and then `yarn dev` to start the server. Once the server starts, go to **http://localhost:3000** and you should see a bunch of **BLACC logos** (we're still working on the home page 😅). If you're using Gitpod, your server should be running on a link similar to `https://3000-olive-bovid-lfeo60c6.ws-eu16.gitpod.io/`. If so, you're ready to write!

## Writing

Go to the `blogs` folder at the root of the project and you should see `example.mdx`. [MDX](https://mdxjs.com/) is like Markdown, but lets us add custom components to our Markdown to make it special and our own!

Navigate to **http://localhost:3000/blog/sandbox** and here's where you can visualize your blog as you make updates to it. Forgot how to make a bulleted list in Markdown? The sandbox has some **Helpful Resources** in case you want to learn more about Markdown or MDX!

When you edit the `example.mdx` file, click **Update changes** in the **Helpful Resources** section or simply reload the page to see your changes. We use [front matter](https://assemble.io/docs/YAML-front-matter.html) as metadata for our blogs so please keep the format you see at the top of the `example.mdx` file.

```yaml
---
title: Getting Started with Crypto
# ...
---
```

## Publishing

When you're done writing your blog, copy and paste the contents of the `example.mdx` file into a new file in that same `blogs folder`. Name this new file the same as the title of your blog but in **Kebab Case** (lowercase and separated by dashes). 

> 🚨 NOTE: It is very important that the file extension is **_.mdx_** and NOT a _.md_ 

**Example**
```yaml
# getting-started-with-crypto.mdx 

---
title: Getting Started with Crypto
# ...
---
```

Once you've added the new file, create a PR to the `staging branch` and you're done! 🥳

> 🚨 NOTE: Don't commit the `example.mdx` file.