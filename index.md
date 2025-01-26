---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home_modified
title: Home
last_modified_at: 2025-01-26
---

<script src="/assets/js/main.js" async></script>

<script src="/assets/js/snow.js" async></script>

<h1 class="centertext">Thomas Fishwick</h1>

<div class="top-group">

<img src="/assets/images/tom.jpg" alt="Tom" class="imgmain">

<div class="inner-group">

<h2>Nice to meet you!<br>I'm Tom Fishwick</h2>

<p>My main experience from work is as a developer for <a href="https://www.elite.com/3e/" target="_blank" rel="noopener noreferrer">Elite 3E</a> (VB.Net & SQL) and <a href="https://www.elite.com/3e/matter-management/" target="_blank" rel="noopener noreferrer">MatterSphere</a> (C#). This involves creating new screens and workflows and integrating them with various APIs. As well as these I have made an ASP.Net site serving a Vue.JS application, and various other JavaScript applications.</P>

<p>In my spare time I have created various apps in Python, JavaScript, React Native and Android. Plus I have some experience in PHP.</p>

</div>

</div>

<hr>

## Skills

<div class="skills-container">

{% for skill in site.data.skills %}

<div class="skills-card">
<p>{{ skill.name }}</p>
<p>{{ skill.years }} Year{% if skill.years > 1 %}s{% endif %} Experience</p>
</div>

{% endfor %}

</div>

<hr>

## Projects

<div class="project-container">

{% for project in site.data.projects %}

<div class="project-tile">
<img src="/assets/images/{{ project.picture }}.jpg" alt="{{ project.picture_text }}" class="borderimage" onclick="openModal('{{ project.name }}', '{{ project.picture }}', '{{ project.picture_text }}', `{{ project.description }}`, '{{ project.link_http }}', '{{ project.link_alt }}');" data-bs-toggle="modal" data-bs-target="#project-modal">

<h3 class="project-title">{{ project.name }}</h3>

{%- if project.url != "/" or project.repository != "/" -%}
<br>
{%-endif -%}

{%- if project.url != "/" -%}
<a href="{{project.url}}" target="_blank" rel="noreferrer noopener">Live Link</a>
{%- endif -%}

{%- if project.url != "/" and project.repository != "/" -%}
<span> </span>
{%- endif -%}

{%- if project.repository != "/" -%}
<a href="https://github.com/SL477/{{project.repository}}" target="_blank" rel="noreferrer noopener">Source</a>
{%-endif -%}

</div>

{% endfor %}

</div>

<hr>

## Certifications

<div class="project-container">

{% for cert in site.data.certifications %}

<a href="https://www.credly.com/badges/{{cert.id}}/public_url" target="_blank" rel="noreferrer noopener">
    <img width="150" height="150" src="/assets/images/{{cert.src}}" alt="{{cert.name}}">
</a>

{% endfor %}

</div>

<hr>

## Contact

<div id="contact-container">
    <p id="contact-text">
    I would love to hear about your company and how I could help. Please fill in the form, and I'll get back to you as soon as possible.
    </p>

<form action="https://link477255648240.wordpress.com/contact/" method="post" id="contact-form">
    <div class="mb-3 row">
        <label for="g32-name" class="col-sm-2 col-form-label">Name:</label>
        <div class="col-sm-10">
            <input type="text" name="g32-name" required id="g32-name" class="form-control">
        </div>
    </div>
    <div class="mb-3 row">
        <label for="g32-email" class="col-sm-2 col-form-label">Email:</label>
        <div class="col-sm-10">
            <input type="email" name="g32-email" required id="g32-email" class="form-control">
        </div>
    </div>
    <div class="mb-3 form-floating">
        <textarea name="g32-message" id="g32-message" class="form-control" rows="5"></textarea>
        <label for="g32-message" class="col-sm-2 col-form-input black">Message:</label>
    </div>
    <button type="submit" class="btn btn-primary mb-3">Send Message</button>
</form>
</div>

<!-- Modal -->
<div class="modal fade" id="project-modal" tabindex="-1" aria-labelledby="projectModalTitle" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="projectModalTitle"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="modalBody">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
