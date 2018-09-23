<!-- This file should contain,

A link (URL) to your published portfolio website
A link to your GitHub repository
Ensure the repository (repo) is accessible by your Educators
Description of your portfolio website, including,
Purpose
Functionality / features
Sitemap
Screenshots
Target audience
Tech stack (e.g. html, css, deployment platform, etc)
Design documentation including,
Design process
Wireframes
Personal logo (optional)
Usability considerations
Details of planning process including,
Project plan & timeline
Screenshots of Trello board(s)
Short Answer Q&A - Include short answers to the following questions,
Describe key events in the development of the internet from the 1980s to today (max. 150 words)
Define and describes the relationship between fundamental aspects of the internet such as: domains, web servers, DNS, and web browsers (max. 150 words)
Reflect on one aspect of the development of internet technologies and how it has contributed to the world today (max. 150 words) -->




# Resume

[Portfolio Link](https://oephi.github.io/resume)

[Github Repo](https://github.com/oephi/resume)

## Description
#### Purpose
To demostrate my ability to utilise HTML, CSS and a little JavaScript to produce a simple portfolio website.

#### Functionality & features
I love simplicity, and so that is what I was going for with this website.  Something simple, elegant and little fun.  The main features are:
 - fade in effect upon landing
 - hamburger menu-style side navigation
 - button which generates random facts about me
 - hexagons presenting my projects with a slide-up revealing mechanism
 
#### Screenshots
![alt text](assets/readme/Screenshot_Profile.png "Profile Screen Shot")

#### Target Audience

This website will be mainly for future employers to have an easy way to see a representation of my current demonstratable skill set and to have access to my resume and past history.


#### Tech Stack
- VSCode (IDE)
- HTML 
- CSS
- Sass
- Javascript
- JQuery
- Materialize (CSS framework)
- GitHub
- Trello
- FireFox (Dev tools)
- Slack (Workplace communications)
- Canva (Banner creation)
- Krita (Art work)
- Pencil (Wire Frames)

#### Design Documentation
From the onset I wanted to make my portfolio simple and elegant and a little bit fun.  Originally I was going to go completely greyscale but eventually I realised that it doesn't really capture me, and once I added those hexagons....it was colour town.  The design process was really fun.  I started coasting various websites for inspiration.  Seeing what other web designers do and going off the random advice I could pull from my memories of listening to my girlfriend (who is a graphic designer) cut certain design choices to pieces (like parallax).

Once I had decided on a general look, I started wire-framing the project.

![alt text](/assets/readme/wire_frame1.png "WireFrame 1")

![alt text](/assets/readme/wire_frame2.png "WireFrame 2")

These are for large screens and I wanted each section to fall under each other once the screen size reached to mobile, which I knew I could make happen with a simple media query and utilising CSS grids

One I had everything laid out in html and had styled and grided my portfolio, I felt that it lacked character.  Plus, once I had the hexagons in place with colour, I realised that the whole lacked a bit of warmth.  So I added colour bars to the skills section, which I colour coded accoring to my banner using Canva colour pallete creator.

![alt text](/assets/readme/canva.png "Canva")

And Coolors:

![alt text](/assets/readme/coolors.png "Coolors")


After that, it was just messing around with margind, padding, and general little adjustments.

I did find a logo that I was going to use.  I found it on google images like this:

![alt text](/assets/logo.png "Logo2")

And used Krita to turn it into this using a background fade plugin:

![alt text](/assets/logo2.png "Logo2")

But in the end I decided not to use it, or atleast not yet.  I'm going to get my partner to design something for me instead

I used Trello to organise my work-flow and keep myself accountable:

![alt text](/assets/readme/trello.png "Trello")

![alt text](/assets/readme/trello2.png "Trello2")


#### Considerations

The format I chose perhaps is not the best for a web-page.  The layout is fantastic when seen all together, but a website is viewed in snippets and I'm not sure my design is best experienced in snippets.  In the future I would like to look more into how to best present a web-site according to this consideration.



# Short Answer Q&A 
## Include short answers to the following questions:
### Describe key events in the development of the internet from the 1980s to today (max. 150 words)
- In 1982 Simple Mail Transfer Protocol was introduced.
- In 1983 The Domain Name System (DNS) institutes the .host names we are now familiar with such as .com, .gov., .edu, etc
- In 1989 Sir Tim Berners-Lee, a graduate of Oxford University and a computer scientist, invents the world wide web.
- In 1990 Berners-Lee creates and writes three technologies still used today: HyperText Markup Language (HTML), Uniform Resource Identifier (URI, more commonly known as URL) and Hypertext Transfer Protocol (HTTP).
-  In 1991 the World Wide Web was launched to the public on August the 6th.
- In 1994 Berners-Lee moves to MIT and founds the World Wide Web Consortium (W3C), which paves the way for open-web standards.
- 	Google is founded by Sergey Brin and Larry Page on September 7, 1998.
- 1998 Web publishing tools are now available, issuing an emergence of blogs.
- 2001 The source of all worldly information, Wikipedia, launches.
- Feb. 4, 2004, Facebook launches but only college students are allowed to join.
- 2015 The Federal Trade Commission adopts laws to keep the internet free and open.


### Define and describe the relationship between fundamental aspects of the internet such as: domains, web servers, DNS, and web browsers (max. 150 words)
DNS stands for "Domain Name System", and is the system used by the internet to make navigation easier.

Web browsers essentially allows us to interact with the internet via a series of steps.  Firstly, when a website is entered into the browser what you are entering is the human readable identification for the location of that website, called the IP Address.  An IP Address is a unique sequence of four sets of numbers seperated by dots which allows the location of the website to be found by other devices connected to the internet.  The computers that host these IP Addresses are called Web Servers.

So first, the browser will look in your local cache to see if you have been to the website before.  If not, then there is a series of levels that that browser will send out the request until it finds the required IP Address..  First will be to the Rescursive DNS servers (the cache of your service provider).  Then the Root DNS Server, Top Level DNS Servers (.com, .org, .net etc) and the Authoritive DNS Severs.  Once here, it is cached by the Recursive DNS server (allowing for faster loading for everyone in your service provider next time the website is visited), and loaded into your browser!


### Reflect on one aspect of the development of internet technologies and how it has contributed to the world today (max. 150 words) 

One of the aspects I have always found fascinating is Open Source, and nothing gets more open source than WikiPedia.  I mean yes, it is people run so alot of the information there can be a little short of valid.  But what amazes me is that before WikiPedia we had to rely on propriety software such as Encarta (Microsoft) and the Encyclopedia Brittanica to garner whatever information we required.  With the advent of WikiPedia it allowed the free sharing of knowledge to everybody.  And even though the information there can often be uncited and less than reliable, atleast it can act as a central hub through which people can begin their inquiry.  Soon after WikiPedia, Encarta and Encyclopedia Brittanica became obselete.  Wikipedia started what would allow the the Internet to become the new hub for the sharing of knowledge.  Open Source knowledge.