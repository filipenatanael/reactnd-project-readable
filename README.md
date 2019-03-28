<p align="center"><a href="https://in.udacity.com/course/react-nanodegree--nd019" target="_blank"><img width="180" src="https://www.wykop.pl/cdn/c3397993/link_SIrKotPCldE7IGnWEjOBSIX1SDMEhE1w,w300h223.jpg" alt="My Reads"></a></p>

<p align="center">
  <a href="https://travis-ci.org/filipenatanael/reactnd-project-readable"><img src="https://travis-ci.org/filipenatanael/reactnd-project-readable.svg?branch=master" alt="Build Status"></a>
<a href="https://www.codacy.com/app/filipenatanael/reactnd-project-readable?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=filipenatanael/reactnd-project-readable&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/25c175ca537941768a94061e6a5b8783"/></a>
    <a class="badge-align" href="https://codecov.io/gh/filipenatanael/reactnd-project-readable/"><img src="https://codecov.io/gh/filipenatanael/reactnd-project-readable/branch/master/graph/badge.svg"/></a>
<a href="https://codeclimate.com/github/filipenatanael/reactnd-project-readable/maintainability"><img src="https://api.codeclimate.com/v1/badges/7bc593f5b7edc705a903/maintainability" /></a>
</p>

<h1 align="center">Readable Project - Udacity Nanodegree</h1>

<p align="center">
<h4>Project Overview</h4>

For the Readable project, you will build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.
  </p>
<br>

![](https://i.ibb.co/gvKWBXg/storybook.gif)

## Stack
- React & Redux
- Redux Thunk
- Material UI
- Jest & Enzime - Unit Testing
- Storybook - Interactive UI component

## Running & StoryBook

If you do not know the [Storybook](https://github.com/storybooks/storybook), is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

```shell
  git clone git@github.com:filipenatanael/reactnd-project-readable.git
  cd reactnd-project-readable
  npm install
  npm start

  /* Running API (The frontEnd are listeneing at ::5001 PORT)*/
  cd reactnd-project-readable/api-server
  npm install
  node server


  /* Check out storybook */
  npm run storybook
  npm run cov
  npm run test
```

## Architecture
This application was built looking for the best abstraction possible of the functionalities, in order to facilitate the understanding and future maintenance.

![](https://i.ibb.co/BtLqXJm/readableprintscreen.png)

## Author

| [<img src="https://avatars3.githubusercontent.com/u/14134758?s=115&v=3"><br><sub>@filipenatanael</sub>](https://github.com/filipenatanael) |
| :---: |
