# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a web page with character components**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In this challenge, create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://tk-assets.lambdaschool.com/b011a132-0916-4ed2-8955-14192de03a75_sample-screenshot.png)

[Another example](https://tk-assets.lambdaschool.com/3b82c793-2352-4d4d-a81d-e55bf350f7bd_sample-screenshot2.png)

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
`React JS is a JavaScript library which is used for building user-interface elements on a webpage such as a button, a search bar, a comment box etc. `
`Some of the problems which React JS solves are as below:`

`- React JS uses a concept called VIRTUAL DOM to update the DOM without reloading the page and thereby significantly improving the website performance`
`If a website incorporates a significant amount of data from the real world (such as user comments and likes) which changes in real time then incorporating these changes into the DOM can significantly affect a website's performance` `Virtual DOM allows only changes between the old DOM and the new DOM to be painted instead of painting the entire new DOM to the webpage`

`- React JS distributes elements of a webpage into discrete components where each component would consist of all the required Markup (HTML), styling in some cases and JS code`
`This distribution of an app into various component thereby makes that component reusable and modular`
`Thus, React JS allows us to create components once and then have them be reused multiple times either in the same application or a different website`

1. Describe component state.
`state is used to create and manage data used within an app component`
`Subsequently, the data managed by the state can change when the user clicks on a button or when an api call is made`
`This change is data is managed using the setState() method thus the state can never tinkered or changed directly`
`Any change in data managed by state must flow through the setState() method`
`The components will be initially rendered based on data stored in the state on website load`
`On subsequent changes in the data managed by state, React will only re-render the component with the updated state and not the entire DOM`

1. Describe props.
`props stand for properties. Props enable us to pass data from the parent component to the child component`
`It is important to note that data flow in React is one-directional which means that it can only flow from a parent to a child`
`Data is passed to a child element by assigning a logical name and setting it equal to a value which will be the data flowing from parent component in this case`
`Inside the child component, this data can be accessed using dot operator on the props object`
`The Biggest difference between props and state is that state is used to manage and create data whereas props is used to pass data`

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
`Side Effects are anything which a component does in addition to returning the elements.`
`Examples of side effects are obtaining data from a server through api calls, setting and clearing timers, interacting with the DOM.`
`useEffect() function is used in React to sync changes with updates in certain state or props`
`useEffect() function takes two arguments.`
`The first argument is a callback function which is run everytime an update occurs`
`The second argument is a dependency array which specifies the props / state which needs to be updated for the callback function to be called`
`The useEffect() function thereby helps us avoid unnecessary calling of the update function everytime a component function is called`

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: `git checkout -b <firstName-lastName>`.
- [ ] Run `npm install` to retrieve all needed dependencies.
- [ ] Once you have installed the _node_modules_, run `npm start` to get your server up and running.
- [ ] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: `git push origin <firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

- [ ] Use ONE of the following APIs:
  - [Star Wars API](https://swapi.dev/)
  - [Alternate Star Wars API](https://swapi.py4e.com/)
  - [The Rick and Morty API](https://rickandmortyapi.com/)
  - [The RESTful Pokémon API](https://pokeapi.co/) (**harder**)
- [ ] Use the documentation and Google to learn how to fetch characters from your API.
- [ ] Obtain a list of characters. One or several requests might be needed, depending on the API.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the screen:
  - Build a React component named 'Character' to render an individual character.
  - Map over the list in state, and for each character render a Character to the page.
  - You must display at least one element for each character in the data set.
  - The elements must be styled with **styled-components** - don't rely on browser default styles.

### Required best practices

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.

It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

### Tips and Gotchas

- [ ] Test your API and inspect the data in Chrome, Postman or HTTPie _before_ writing the code for the request(s). See screenshots at the root of the project.
- [ ] Try not to hammer your API while developing. Infinite loops in your code might trigger hundreds of requests!
- [ ] The Pokemon API is a slightly harder challenge because a single network request might not be enough to get all the data you need.
- [ ] Running `npm` commands in the wrong folder will not work. **Be aware of what folder you're in** when working in the command line.
- [ ] The `start` process can sometimes choke after adding new dependencies and may need to be restarted.

In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Use Promise.all to resolve an array of promises.
- [ ] Create transitions or animations with styled-components.

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge `<firstName-lastName>` Branch into `main` branch (student's Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
