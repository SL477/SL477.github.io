---
categories: Programming
layout: post
title: Automating Documents with Word
excerpt: A brief look at various ways of automating Word documents
author: Tom Fishwick
---

![Word VBA](/assets/images/WordVBA.JPG)
_Word VBA_

After spending too long dreaming of how I would automate my invoicing solution I finally cracked the main part of creating the document. Here Word VBA came into its own.

I had mostly been distracted by Python, as I spend most of my time using it at university (and may at some point wrap a Python script around it). But after spending a couple of days at work converting documents that were automated through Thomson Reuters Contract Express (an amazing system for automating Word documents through questionnaires) to work in plain MS Word (so that they could work for users who did not use Contract Express). It finally hit me to use Word VBA for my own issue.

My first professional bit of programming was using Excel VBA to automate a couple of spreadsheets which we used in Finance. This work then helped to get me into McMillan Williams 3E project, as 3E's programming language is VB.Net.

Transitioning back from VB.Net to VBA was a little painful, as many helpful parts of VB.Net are not present and the macro editor in Word (and Excel) is a bit impatient (if you start writing a line and then leave it while it is invalid an error is immediately raised).

Using a healthy dose of trail and error (plus the Microsoft pages on Word VBA and a slight bit of Googling) I setup various content controls (mostly because they look like ordinary text when they are filled in) to capture data such as the invoice number, number of hours, rate and invoice date. Then I built a function that activated when a content control was exited to run code after that. It first checks the tag of the control changed (the ActiveX ones directly link to an on-change function), then for number of hours it works out the total and updates that field. For the invoice date it adds 30 days and writes back to the due date control (the portion of code shown). To get to linked controls it uses a loop to look through the tags until it finds the correct one, which is not as efficient as I would like but with only a dozen controls it did not make too much sense to focus on it (but if anyone knows a better way I am very interested in it).
