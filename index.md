---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home_modified
title: Home
---

## Developer

My main experience from work is as a developer for [Elite 3E](https://www.elite.com/3e/) (VB.Net & SQL) and [MatterSphere](https://www.elite.com/3e/matter-management/) (C#). This involves creating new screens and workflows and integrating them with various APIs. As well as these I have made an ASP.Net site serving a Vue.JS application, and various other JavaScript applications.

In my spare time I have created various apps in Python, JavaScript, React Native and Android. Plus I have some experience in PHP.

## Projects

{% for project in site.data.projects %}

### {{ project.name }}

{%- if project.url != "/" -%}
<br/>

[Live Link]({{project.url}})

{%- endif -%}

<br/>

Source: [{{ project.repository }}](https://github.com/SL477/{{proeject.repository}})

![{{ project.picture_text }}](/assets/images/{{ project.picture }}.jpg){: .borderimage}

<br/>

{{ project.description}}

{% endfor %}

### XKCD Reader

My XKCD Reader app, which uses React-Native to render the [XKCD website](https://xkcd.com).

The Android APK file (tested on my phone and in the Android emulator) is available [here](https://drive.google.com/drive/folders/1_jtg6b4z-SArgA5KvZkewE4TjUxHe29F?usp=sharing).
