---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home_modified
title: Home
---
<script src="/assets/js/main.js" async></script>
<h1 class="centertext">Thomas Fishwick</h1>

<div class="top-group">

<img src="/assets/images/tom.jpg" alt="Tom" class="imgmain">

<div class="inner-group">

<h2>Nice to meet you!<br/>I'm Tom Fishwick</h2>

<p>My main experience from work is as a developer for <a href="https://www.elite.com/3e/" target="_blank" rel="noopener noreferrer">Elite 3E</a> (VB.Net & SQL) and <a href="https://www.elite.com/3e/matter-management/" target="_blank">MatterSphere</a> (C#). This involves creating new screens and workflows and integrating them with various APIs. As well as these I have made an ASP.Net site serving a Vue.JS application, and various other JavaScript applications.</P>

<p>In my spare time I have created various apps in Python, JavaScript, React Native and Android. Plus I have some experience in PHP.</p>

</div>

</div>

<hr/>

## Projects
<div class="project-container">
{% for project in site.data.projects %}

<div class="project-tile">
<img src="/assets/images/{{ project.picture }}.jpg" alt="{{ project.picture_text }}" class="borderimage" onclick="openModal('{{ project.name }}', '{{ project.picture }}', '{{ project.picture_text }}');" data-bs-toggle="modal" data-bs-target="#projectModal"/>

<h3 class="project-title">{{ project.name }}</h3>

{%- if project.url != "/" or project.repository != "/" -%}
<br/>
{%-endif -%}

{%- if project.url != "/" -%}
<a href="{{project.url}}" target="_blank" rel="noreferrer noopener">Live Link</a>
{%- endif -%}

{%- if project.url != "/" and project.repository != "/" -%}
<span> </span>
{%- endif -%}

{%- if project.repository != "/" -%}
<a href="https://github.com/SL477/{{proeject.repository}}" target="_blank" rel="noreferrer noopener">Source</a>
{%-endif -%}

</div>

{% endfor %}
</div>

<!-- Modal -->
<div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalTitle" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="projectModalTitle"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="modalBody">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">close</button>
            </div>
        </div>
    </div>
</div>
