---
layout: page
title: Changelog
last_modified_at: 2025-06-21
permalink: /CHANGELOG
---

## 2025-06-21

### Modified

- Robots.txt

## 2025-06-07

### Modified

- Robots.txt
- NavBar, I finally decided to listen to [why you shouldn't use details as a menu](https://melsumner.github.io/details-as-a-menu). I followed the guide on [CSS only accessible nav menu](https://moderncss.dev/css-only-accessible-dropdown-navigation-menu/) and the [Aria guide on menus](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/). And tried to fill in the many gaps in the two.

## 2025-06-01

### Added

- Blogroll

### Modified

- Added Subscribe Openly to the XSLT for the feeds and to the Feeds page.

## 2025-05-05

### Added

- oembed data for Slack. Inspired by [Kevin Mark's Decaying Silos post](https://www.kevinmarks.com/partialsilos.html).
- Validations in my Readme for the CSS and Atom Feed.

### Modified

- Model rail page to use the new CSS scroll properties to be a carousel. Inspired by [Chrome's carousels with CSS](https://developer.chrome.com/blog/carousels-with-css)
- Robots.txt - Added more crawlers to the ban list

### Removed

- The old model rail JS component

## 2025-03-16

### Modified

- Updated CSS for a tags in dark mode and some of the blog tags
- Fixed the XML feed for FireFox

## 2025-03-09

### Added

- Notes.json
- Pages.json
- Way to search the site using OpenSearch

### Modified

- Fixed CSS for light-mode links and date for Blog

## 2025-03-06

### Modified

- Updated Snake game to be playable with a mouse

## 2025-03-02

### Added

- Notes feed
- Sitemap Stylesheet
- My own way of generating the sitemap.xml
- [Description of a project file](/doap.xml)

### Modified

- Update to Feed Stylesheet

### Removed

- notes.html
- sitemap.html
- Jekyll-Sitemap
- Feed.html from the head, on the grounds that I deleted it

## 2025-02-23

### Added

- Stylesheet for Feed.xml

### Modified

- Explicitly set the size of the main image
- Fix typo in projects
- Remove div from NavBar
- Made Open Graph URL an absolute URL
- Change link styling in light-mode for more contrast
- Added more data into the XML feed

### Removed

- Feed.html

## 2025-02-15

### Added

- Added web-p versions of pictures into the footer

### Modified

- Added Change log to Nav
- Fixed label issue with Dark mode picker
- Moved NavBar toggle
- Updated Robots.txt
- Fixed alt tag of Open Graph Image
- Fix issue with Notes feed
- Add absolute URL to logo in navbar

## 2025-02-11

### Added

- Light-dark mode switcher
- WebP versions of pictures
- New Web-Component of the Navbar

### Modified

- Updated Alt-Texts on Project images.
- Updated images on homepage to use the Picture tag so that they can use WebP images. And lazy loading.
- Removed the Modal popup on the homepage and switched to using the details tag.
- Hide the hint report from Jekyll so that it would not start checking itself.
- NavBar no longer requires JavaScript to work.
- Fixed MatterSphere link.
- Rounded main picture.
- Hidden the Tableau skill. Although I maintain that it is better than Power BI!
- Converted homepage from MarkDown to HTML (apart from the headings it was all in HTML anyway).
- Fixed H-feed to remove last line
- Fixed issue with PWA

### Removed

- LinkedIn Badge from About page
- CSS/SCSS for the homepage. Combined into the main SCSS.
- Bootstrap

## 2025-02-01

### Changed

- Minified remaining CSS
- Changed CSS to non-blocking
- Made JavaScript deferred where possible
- Fix PageSpeed Insights issues
- Fixed issue with label on contact form
- Fixed jumped header on home screen
- Added Notes to Sitemap HTML

### Removed

- Font Awesome

## 2025-01-29

## Changed

- Issues from WebHint
- Added WebMentions to Posts
- Added sitemap to footer
- Started converting CSS to SCSS, as this is set to minify

## 2025-01-21

### Changed

- Rogue Like Space, fixed ESLint issues
- Keyboard, fixed ESLint issues

## 2025-01-19

### Added

- StyleLint package

### Changed

- Various issues in the head
- Various StyleLint issues

## 2025-01-11

### Added

- feed.html, the H-feed of my blog

### Changed

- Updated my h-card entries so that I had a relative URL for the pictures
- Updated the Post layout to display the tags (also fixed the two word tags so that they showed as one tag)
- Updated the CSS to display the tags in various colours
- Fixed the month in the Humans.txt (that certainly isn't automated 😉)
- Moved the various Post's header images into the meta data, so that they are more consistently rendered
- Added the text content and image into the Feed.json file

## 2024-12-26

### Added

- Sitemap.html

### Changed

- URL structure of blog
- Fixed feeds.json to take tags rather than categories
- Added Open Graph Images

## 2024-12-08

### Added

- Changelog
- Feeds page

### Changed

- Added last modified at data to all pages
- Humans.txt, fixed it so that it gets the last date of the site. Also changed Twitter to Github
