---
layout: post
title: Different Report Types
categories: Programming
---
In my time at McMillan William's/Taylor Rose MW and as a student at City University I have used various different reporting packages.

The most flexible report type I have used is SQL Server Reporting Services (SSRS). It may not be as modern as Power BI, but is very easy to customise and to create reports which look good both on screen and printed out (though the printed side is interesting to put it mildly). I have used it to create many reports and used it as a way to template some documents.

Power BI is something that I have had less experience in, it is useful for creating dashboards with lots of reports interacting with each other (something possible to do in SSRS, but not something that it was designed for). It can also take in data from sources other than SQL Server.

Elite 3E has its own reporting service. You first built Report Objects, which are effectively XML versions of the SQL query. You can also code in various interactions for the report (such as drill-downs) here. The front-end is then made in Reports, which has most of the functionality as SSRS. On the front-end of 3E you can link Presentations (reports which have met their parameter pages) together in dashboards (these do not have the same interlinking as Power BI/Tableau (as far as I'm aware)).

Tableau, this is something which I used at University, it is amazing for quickly charting out various different exploratory graphs. A related program Tableau Data Prep allows for the preparation of incoming data (which can be done in Power BI too in a less visual way).

Python, this is far more flexible at making graphs (not as quick as Tableau/Power BI though). MatPlotLib and Seaborne are wonderful libraries for making neat looking graphs and have relatively straightforward interfaces (there are other libraries for interactive graphs).

R and MATLAB also have good graph packages, my main issue with MATLAB is the need to pay for it (although its graphs are beautiful). R is something of a strange programming language, I appreciate its syntax being similar to C style languages but I'm not so keen on always using functional programming.

Excel, often where many reports start or end. Definitely the most flexible of all of these, good for prototyping and can interact with SQL and other spreadsheets. With Power Query you can pull in various data, plus you can connect to SQL Server. Also macros can allow you to do things that Excels formulas cannot (though there are not many things the formulae cannot do).
