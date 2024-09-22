#438 Project 1 Group 10 News Plug

**This app allows users to browse articles, favorite them, and get suggestions based on their favorites**

## API's used: 
-https://developer.nytimes.com/docs/articlesearch-product/1/overview
-https://developer.nytimes.com/docs/most-popular-product/1/overview

## Features:
- **Loads popular articles**: By default, the app loads the most viewed articles in the last 24hrs from NYTimes
- **User can search articles**: Users can search Articles based on keyword and various filters
- **User can favorite articles**: Favoritng an article allows users to quickly view from their favorites page
- **User can get suggestions based on favorites**: Suggestions page will load articles based on tags associated with articles that have been favorited

- ## Usage:
- this app is good to keep up to date with news and look for specific articles and intrests in the news 

- ## Installation instructions:
- install android studio and follow these steps https://reactnative.dev/docs/set-up-your-environment  (make sure to click the target OS android in the link)
- additional installations are:
- - npm install react-native-element-dropdown --save
  - npx expo install expo-sqlite
  - npm install
- when trying to run use: npx expo run
- click android and wait for downloades to complete
- STOP HERE and follow API TESTING if you want to test API is working correctly
- npx expo start
- then press a 


- ## API TESTING:
-after following the necessary installation steps:
-npm install -g newman 
-newman run api-tests.json


# Project 01 Retrospective and overview

[Video Walkthrough](https://youtu.be/Yv6L0VQuROM) 

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
  + The most valuable thing I learned from this was working with a framework like React Native. I know it is popular in the real world and there’s a good chance I will work with it again, both in school and future work, so I enjoyed being able to get familiar with it. 

### Andrew Aguilar
[Pull Requests](https://github.com/alexr415/438-project-1-gorup-10/pulls?q=is%3Apr+is%3Aclosed+author%3AAf0n)

[Issues](https://github.com/alexr415/438-project-1-gorup-10/issues?q=is%3Aissue+is%3Aclosed+assignee%3AAf0n)
#### What was your role / which stories did you work on
**I was responsible for making the Debug page, displaying the article from the Favorites and Suggestions pages, and implementing the filter modal including the proper API logic to make filters work.**

The biggest challenge I faced was the unit testing. I had never used Jest before, and to be honest, I haven't written unit tests in a while. In my personal projects, it's not something I often stop to do. Combined with needing to learn an entirely new system in order to test code? Didn't exactly help. But, I did get some help from my teammates. I also asked ChatGPT what the Jest syntax was doing when I didn't understand.

My favorite part of the project was actually building the pages. That was my favorite part of the software design class, my favorite part of web dev class, and that's no different here.

If I could do it over, I would definitely commit to having a more set schedule for the group than we ended up having. I think that  would help the flow of the project much better. I think also, I would defer database setup off the bat. I was a bit overconfident in my Android Room skills, and the database was delayed by a week because I just couldn't figure it out.

The most valuable thing I learned is to not overestimate my abilities when working in an unfamiliar environment. This was my first time using React Native too, so it didn't help.


### Francisco Solis
[Pull Requests](https://github.com/alexr415/438-project-1-gorup-10/pulls?q=is%3Apr+is%3Aclosed+author%3AFranciscoCamach0)

[Issues](https://github.com/alexr415/438-project-1-gorup-10/issues?q=is%3Aissue+is%3Aclosed+assignee%3AFranciscoCamach0)


#### What was your role / which stories did you work on
During Project 1 I worked on making the login page, sign up page, and updating user info, and connecting it to the database.

What was the biggest challenge?
Biggest challenge for me was at the start getting react native to work.

Why was it a challenge?
It would throw erros at me saying I did not have a emulator open when I did.

How was the challenge addressed?
I searched for youtube videos and found out what was wrong from them and fixed it.

Favorite / most interesting part of this project
I liked connecting everything into the database the most.

If you could do it over, what would you change?
I would involve myself more with the project and take on more tasks.

What is the most valuable thing you learned?
How to use React native and sql lite within the project.

### Nicholas Garcia
[Pull Requests](https://github.com/alexr415/438-project-1-gorup-10/pulls?q=is%3Apr+author%3A%40me+is%3Aclosed)

[Issues](https://github.com/alexr415/438-project-1-gorup-10/issues?q=is%3Aissue+is%3Aclosed+assignee%3AnickGar123)


#### What was your role / which stories did you work on
During Project 1 I worked on The logout button, the remove from favriotes, and filter by begin and end date.

What was the biggest challenge?
Biggest challenge for me was at the start getting react native to work.

Why was it a challenge?
I was getting weird errors that were eventually fixed.

How was the challenge addressed?
I searched through articles and the web as well as youtube which fixed most of the errors and then asked a teammate for help.

Favorite / most interesting part of this project
I liked adding the filters and adding to database.

If you could do it over, what would you change?
I would get help to set up react native sooner so I can start my issues.

What is the most valuable thing you learned?
How to use React native and sql lite within the project as well as work witha team very closely and how to communicate with them.



## Conclusion

### How successful was the project?
The project was a success overall, we encountered a few bugs, but overall were able to close all of our issues and get a functioning project allowing users to see articles and do various things with them.
### What was the largest victory?
Our largest victory was setting up our database and connecting the api to out project.

### Final assessment of the project
Overall this project proved to be difficult at the start getting everything situated and up and running. However this project also gave us valuable experience working with react native and sqlite that will help us in the future.
