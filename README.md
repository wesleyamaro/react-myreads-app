# MyReads Project [[![Build Status](https://travis-ci.org/wesleyamaro/react-myreads-app.svg?branch=master)](https://travis-ci.org/wesleyamaro/react-myreads-app)]
This is the final assessment project for Udacity's React Fundamentals course using React with no Redux.

Create a bookcase application that allows us to select and sort books we've read, are reading, or want to read. The project emphasizes using React to build the application and provides an API server which we will use to persist information as we interact with the application.

## Available on Surge.sh
[Check it out!](http://wesleyamaro-myreads.surge.sh/)

## Instructions
To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* it will be available on port 8081

## Requirements
Home Page
* Should be shown 3 categories (or "shelves") of books ("currently reading", "want to read" and "read")
* Should allow the books to be moved into other categories (or "shelves")
* Should allow the books to be removed from their categories (or "shelves") when selected the option "none"
* Should be shown all the changes when the page reloads
* Should be shown a page with no results found

Search Page
* Should be shown a search input which allows the users to search
* Should allow to move the books researched into their categories (or "shelves")
* Should be shown at the Home Page all the changes that the users have made on their categories (or "shelves")

Routing
* Should allow the users to navigate between the pages (Home and Search)
