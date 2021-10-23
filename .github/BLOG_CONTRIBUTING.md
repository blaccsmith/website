# Writing a blog for BLACC

Thanks for wanting to share **your unique experiences and insights** with the rest of the community! We've made a sandbox for you to write and view your blog so let's go through how it works 🚀

## Setup - 1
Fork our repository, and complete the following steps from your forked repo.
Next, clone the staging branch and follow the instructions in Setup-2 or read below to learn how to open Gitpod workspace to start blogging in the cloud 🤩

Download and install the Gitpod extension for your browser. Refresh the page and click on the green button that says "Gitpod" at the top right corner of your forked repository. In your newly-opened cloud workspace, switch to the staging branch in the terminal. You're ready to move on to the next step!

## Setup - 2
Run `yarn` to install dependencies and then `yarn dev` to start the server. Once the server starts, go to **http://localhost:3000** and you should see a bunch of **BLACC logos** (we're still working on the home page 😅). If you're using Gitpod, your server should be running on a link similar to `https://3000-olive-bovid-lfeo60c6.ws-eu16.gitpod.io/`. If so, you're ready to write!

## Writing

Go to the `blogs` folder at the root of the project and you should see an `example.mdx` file. This file shows an example for you to reference when creating your blog. We're using [MDX](https://mdxjs.com/) for content creation — it's like Markdown, but lets us add custom components to our Markdown to make it special and our own!

Create a new file in the `blogs folder`. Name this new file the same as the title of your blog but in **Kebab Case** (lowercase and separated by dashes).

> 🚨 NOTE: It is very important that the file extension is **_.mdx_** and NOT _.md_

**Example**

```yaml
# getting-started-with-crypto.mdx
---
title: Getting Started with Crypto
# ...
---
```

Navigate to **http://localhost:3000/blog/`your-blog-title`** and here's where you can visualize your blog as you make updates to it. Forgot how to make a bulleted list in Markdown? Checkout this [Markdown Guide](https://www.markdownguide.org/basic-syntax/) for some guidance.

When you edit your blog, the page will reload and you'll see your updated changes! We use [front matter](https://assemble.io/docs/YAML-front-matter.html) as metadata for our blogs so enter as much info as you want at the top of the file. Take a look at the `example.mdx` file to see what you can add as metadata.

```yaml
---
title: Your blog title goes here
# ...
---
```

## Using Images

All images should be placed in the **public folder**. For organizational purposes, images should be placed in folders that correspond to the page
they're on or the context in which they're being used. For example, if you're documenting usage for the _**Grid**_ component, you'd put the image in
the **grid/** folder.

> To create an empty folder, put the name of the folder _(ex: my-blog-title)_, followed by a _**/**_ then enter "_**.gitkeep**_" in the input. You should see something similar to the image below:

![screenshot of Github](/github-empty-folder.png)

To access an image in your markdown, simply use "**/file-path**" where needed. Be sure to add the appropiate file extension to the path or the image will not be rendered.

> For the above Github photo, I wrote "**/github-empty-folder.png**" in the [neccecary syntax](https://www.markdownguide.org/basic-syntax/#images-1).

## Publishing
Once you've finished writing your blog, commit your changes.
Then create a PR to the `staging branch` and you're done! 🥳