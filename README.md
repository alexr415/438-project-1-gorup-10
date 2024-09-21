
# Project 01 Retrospective and overview

[Video Walkthrough](https://www.youtube.com/watch?v=o-YBDTqX_ZU) 
<!-- Ads have really ruined rick-rolling. -->
[Github Repo](https://github.com/alexr415/438-project-1-gorup-10)

## Overview
**This app allows users to browse articles, favorite them, and get suggestions based on their favorites**

### API's used: 
- https://developer.nytimes.com/docs/articlesearch-product/1/overview

- https://developer.nytimes.com/docs/most-popular-product/1/overview


### Usage:
- this app is good to keep up to date with news and look for specific articles and intrests in the news 

### Installation instructions:
- install android studio and follow these steps https://reactnative.dev/docs/set-up-your-environment  (make sure to click the target OS android in the link)
- additional installations are:
- npm install react-native-element-dropdown --save
- npx expo install expo-sqlite
- npm install
- when trying to run use: npx expo run
- click android and wait for downloades to complete
- STOP HERE and follow API TESTING if you want to test API is working correctly
- npx expo start
- then press a 

### API Testing:
- after following the necessary installation steps:
- npm install -g newman 
- newman run api-tests.json

We got styling help for this document from [this guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## Introduction

+ How was communication managed
  + We communicated regularly on Slack
+ How many stories/issues were initially considered
  + We initially came up with 15 stories.
+ How many stories/issues were completed
  + We completed 17 stories in the end. 

## Team Retrospective

### Alex Roy

- [link to pull requests](https://github.com/alexr415/438-project-1-gorup-10/pulls?q=is%3Apr+is%3Aclosed+assignee%3Aalexr415)
- [link to issues](https://github.com/alexr415/438-project-1-gorup-10/issues?q=is%3Aissue+is%3Aclosed+assignee%3Aalexr415)

#### What was your role / which stories did you work on
For this project I worked on a variety of things from UI,API’s, and databases. I designed the UI and layout for each page I implemented. I worked on getting elements on pages to populate from data pulled from the API. I added Postman testing for the API’s. Finally, I designed the database and handled some of the interactions with it. 

+ What was the biggest challenge?
  + The biggest challenge was getting work done in the beginning without a database.
+ Why was it a challenge?
  + It was a challenge because there was a limited amount of things that could be worked on without the database. Many aspects of our app relied on either inserting or retrieving from the database in order to function correctly. We all had experience with ROOM databases in Android Studio using Java, but no-one was familiar with using it with typescript and a React Native project. 
+ How was the challenge addressed?
  + The challenge was addressed by switching from a ROOM database to expo-sqlite after reading how much simpler it was to use. Once we made the switch and I read some documentation,  the database was up and running the same day.
+ Favorite / most interesting part of this project
  + My favorite part of this project was being able to use typescript to develop an app. In the past I had only used Android Studio and Java for apps, which I absolutely hated and made me want to stay away from app development. However, this experience was not bad and I wouldn’t mind doing it again.
+ If you could do it over, what would you change?
  + This was my first time planning a group project like this where we start with a list of issues, then each take an issue and start from there. In the future I would spend more time looking at which issues need to be done first before moving on to others, that way someone doesn’t start working on an issue that requires another person to finish theirs first. 
+ What is the most valuable thing you learned?
  +The most valuable thing I learned from this was working with a framework like React Native. I know it is popular in the real world and there’s a good chance I will work with it again, both in school and future work, so I enjoyed being able to get familiar with it. 

### Andrew Aguilar
[Pull Requests](https://github.com/alexr415/438-project-1-gorup-10/pulls?q=is%3Apr+is%3Aclosed+author%3AAf0n)

[Issues](https://github.com/alexr415/438-project-1-gorup-10/issues?q=is%3Aissue+is%3Aclosed+assignee%3AAf0n)
#### What was your role / which stories did you work on
**I was responsible for making the Debug page, displaying the article from the Favorites and Suggestions pages, and implementing the filter modal including the proper API logic to make filters work.**

The biggest challenge I faced was the unit testing. I had never used Jest before, and to be honest, I haven't written unit tests in a while. In my personal projects, it's not something I often stop to do. Combined with needing to learn an entirely new system in order to test code? Didn't exactly help. But, I did get some help from my teammates. I also asked ChatGPT what the Jest syntax was doing when I didn't understand.

My favorite part of the project was actually building the pages. That was my favorite part of the software design class, my favorite part of web dev class, and that's no different here.

If I could do it over, I would definitely commit to having a more set schedule for the group than we ended up having. I think that  would help the flow of the project much better. I think also, I would defer database setup off the bat. I was a bit overconfident in my Android Room skills, and the database was delayed by a week because I just couldn't figure it out.

The most valuable thing I learned is to not overestimate my abilities when working in an unfamiliar environment. This was my first time using React Native too, so it didn't help.

## Conclusion

- How successful was the project?

- What was the largest victory?

- Final assessment of the project
