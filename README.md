# Productivity-App

This is a react web-app that I made with the intent to provide a means for managing productivity. It is fairly simple but each feature utilises a specific part of the react toolbelt.

# How to run

Navigate to the frontend directory and firstly install the packages using `npm install`. Then `npm start` will launch the app on `localhost:3000`.

# Overview

This app has a live background playing. There is also a toolbar at the bottom that allows you to open each of the widgets. These widgets are fully draggable and the state of the widgets (not the content) is handled by the UIContext context.

### Todo List

The first major feature was a todo list. Firstly, there is the ability to add an item. This is done using a button at the bottom which opens a modal from the Antd component library. The user can then name their task and pick a due date using a calendar date selector. Helpful for something like recording the tasks in a busy week.

The user can choose to filter their todos by most or least urgent using the arrow in the top right. On hovering on the buttons on the right of the todo item, there are basic css color transitions. Clicking the 'tick' or the 'x' on an item will change it's completed status. We can also delete an item from the list using the trashcan icon.

##### Why make this?

The reason that I decided to make a todo list component was because it uses a subset of the React tools that are critical to know. Primarily, the todo items are recorded using state, which is provided to the component, and managed, by a context. This allows a centralised location for managing the todo list state. This uses the useState hook.

### Timer Widget

The second major feature was a timing component. This allows the user to choose a time to countdown from via a modal window. It also does input validation. There is a second simple feature here as well. There is a stopwatch component as well which will just record the time that has passed - helpful for timing something like an exam paper.

##### Why make this?

The reason that I chose to make this was because it would teach me how to work with the setInterval callback as well as manage state around this. I found that this was a lot more complicated then I initially thought - React doesn't persist state changes that are made within the intervals, so I had to work around this using the useEffect hook. More details can be found in src/Components/Clock

### Weather Widget

This is a very clean looking widget that will provide weather information about any city in the world. It defaults to London, however, it can be changed using the Settings button. This will open a modal which provides autocompleting input fields that change dynamically.

More specifically, when choosing a country, the city input field will dynamically change to show all the cities that are in that country. This leverages an Antd component to help with the autocomplete, but also some manual filtering of data for the user. We can also choose the units.

Keep in mind that I will not be providing an API key for you to view this. However, one can be obtained for free from [here](https://openweathermap.org/). This will allow 1000 free API calls per day.

##### Why make this?

The reason that I decided to make this weather widget was because I wanted to make something that looked really nice. The other components look fine, but they are fairly simple draggable windows. I wanted to make something I really liked.

Also, I wanted to make something that was asynchronous. I wanted to practice interacting with an API to fetch some data and then display it to the user. However, you will also notice that I have some extra features, i.e. When refreshing, the widget content is replaced with a proper loading spinner. The main purpose for this widget was to practice providing a very clean user experience.

This feature leverages a custom hook that I created. This was made to provide information back to myself about the status of the data fetching process. But I've done this in a hook so that it can be done in a reusable way.

# Wrap up

This project was done completely by me, Henry Gann, with no external assistance and with the sole purpose of learning React. This project taught me:

- CSS transitions, Flex and general skills
- Many of the React features: Contexts, useState, useEffect, etc.
- How to perform asynchronous data fetching using external APIs

Overall, this project has taught me a lot about React and web development in general. I hope you like it, and if there are any problems with it, feel free to let me know and I will have them resolved ASAP.
