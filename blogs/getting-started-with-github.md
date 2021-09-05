# Getting Started with Github

## Setting up your environment

Setting up your environment is essential to becoming a contributor using Github. Once your environment is set, you can monitor your activity through the [website](https://github.com/) or [mobile app](https://github.com/mobile). To contribute to this website, you need to set up your own  GitHub account.

## Create a GitHub account and set up your profile

Need a GitHub account? [Create one](https://github.com/join). Here's an opportunity to get creative with a username that describes your best qualities.  You can use an existing GitHub account to contribute to the website repo or any other repo you are currently using. Don't forget to complete the profile associated with your account. The profile is a way of communicating your interest and what you like to do technically.

>[!NOTE]
> Profiles are public. Please do not put any personal information in your profile. The entire GitHub community can view what you have written.

## Setting up the GitHub Stack

The recommendations provided are based on the setup used by professionals contributors. 

### Install Git 

[Git](https://git-scm.com/downloads) (also known as Git Bash) A command-line-based tool that allows you to submit pull requests, manipulate the branches you created and update your local(forked) copy of the repo. The documentation for [how to use Git](https://git-scm.com/doc) is available online. This tool is available on Linux.

Free CodeCamp recommends this [list](https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/) of Git commands developers should know.

### Visual Code

[Visual code](https://code.visualstudio.com/) is available in Windows, Mac, and Linux. It is a lean editing tool that has multiple uses for development. The installation is simple and documented on the site. There is an extensive marketplace for extensions to enhance your experience using this tool built right into the application! Extensions allow you to work more closely with Github and publish branches without leaving the Visual code.

[Walkthrough using Visual Code for your first Pull Request](https://code.visualstudio.com/docs/editor/github).
It is crucial to **get a local copy of the repo before you start working on the site's content.**

>[!NOTE]
>New branches and pull requests should only be created in **origin/staging**. **Origin** is the name of the remote repository that the local repo sourced. **Main** is the branch name that contains all of the published content. You will not be making commits directly to **main**. However, you should pull **main** into your local repo to ensure you are working with the latest published content. It will reduce the risk of conflicts and unintentionally overwriting published content once your pull request merges.
 
In the documentation, user groups, and support channels, you'll see the terms like **master** and **origin**. Our content will reference the actual names within the repo whenever possible.

### Refresh your local repo often

It is essential to regularly update your local copy of the repo to ensure you have the latest changes. All of the updates approved by the reviewer and merged into the repo will be part of this update. A good routine is to update your local repo before you create or update any open pull requests.

For example, use Git to update your local repo.

```
$ git pull upstream main
```
The results shown below are the updates from the website repo added to the local copy.

```txt
From https://github.com/blaccsmith/website
 * branch            main       -> FETCH_HEAD
Merge made by the 'recursive' strategy.
 .github/ISSUE_TEMPLATE/---bug-report.md      |  3 +-
 .github/ISSUE_TEMPLATE/---feature-request.md |  9 ++--
 .github/ISSUE_TEMPLATE/bug-report.yaml       | 61 ++++++++++++++++++++++++++++
 .github/ISSUE_TEMPLATE/feature-request.yaml  | 40 ++++++++++++++++++
 4 files changed, 108 insertions(+), 5 deletions(-)
 create mode 100644 .github/ISSUE_TEMPLATE/bug-report.yaml
 create mode 100644 .github/ISSUE_TEMPLATE/feature-request.yaml
```

Completing this step before you edit or create content will reduce the possibility of a [merge conflict](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts#resolving-merge-conflicts).

### Github Desktop

If you are new to Github or would like a quick visual of what's going on in the repo, this is the tool for you. At a glance, you can see the history of changes in the repo you are working in, your latest changes as well as branches you've created. You can use the Github desktop application to get a copy of any repo you are working in. The GitHub website can connect directly to your desktop. The tool also can publish your branch instantly to the repo.

Want to leverage Github Desktop? See [Contributing and collaborating using GitHub Desktop](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop)

### Tips

 The information will be helpful as you being a journey with Github or to refresh your skills. This list is subject to change based on availability. If one of the links no longer works, please advise us, or share a link you've found useful.

- [GitHub Docs](https://docs.github.com/en)
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Basic syntax of markdown](https://www.markdownguide.org/basic-syntax/)
- [GitHub markdown syntax PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)
- [Create an issue or Pull Request](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request)

## Next Steps

View the [website](https://github.com/blaccsmith/website) repo online to discover ways that you can contribute. If you have a question, post it in the **#help-wanted** in [discord](https://discord.com/).