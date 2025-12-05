---
title: Finding the Unknown Users
publishDate: 2025-11-13 00:00:00
img: /co-creation-toolkit/assets/case-studies/covers/cs-cover-06.png
img_alt: Environmental data platform research illustration
description: Using the customer sprint methodology to understand who needs integrated environmental data access and what features would serve them best.
tags:
 - User Research
 - Customer Sprint
 - Prototyping
 - Personas
featured: true
organisation: BGS
author: Carl Watson (Head of UX, British Geological Survey)
---

## Overview

> Environmental data is scattered across multiple data centres, making it difficult for users to find and integrate what they need. We used the customer sprint methodology to understand if an integrated platform could solve this problem—and what it should offer.

## The Challenge

UK Environmental data lives in silos across different data centres (e.g. NERC data centres BODC, CEDA, EIDC, NGDC, UK PDC) and while the Environmental Data Service (EDS) could break down these silos, if designed well and with end users involved, we first needed to track down those potential users. 

**The question**: Who are the potential end users and how could a unified environmental data platform help them?

## Research Approach: Customer Sprint

We adapted Google Ventures' customer sprint methodology to rapidly understand user needs:

### 1. Identify User Groups via Literature

We started with historical user research, collating reports, papers, survey rersults and interview transcripts from past projects, these were all public documents that involved users expressing thoughts on various environemntal data services. Through this mini systematic review, and with a little help from Google NotebookLM, we identified the following as potentially key user types of the EDS:

* Environmental Data Analysts
* Climate Scientists
* Remote Sensing Specialists
* GIS Analysts
* Water Resources Scientists
* Sustainability Consultants
* Renewable Energy Analysts
* Environmental Policy Advisors

### 2. Real-World Analysis via LinkedIn

Armed with a high-level understanding of our target users, we tried a range of methods to find real people that matched the conceptual personas we had created, prioritising  previously unknown contacts that had no obvious connections through our existing networks. 

* We searched public profiles on various platforms but found most success in the professional profiles on LinkedIn
* We collectively reviewed dozens of profiles, exploring their interests, projects and publications
* Identifying concrete examples of relevant data usage or needs gave us a lot of confidence we were on the right track 
* Then we triaged the selection to focus in on our 'bullseye customer', in this case users of environmental monitoring data from a range of domains and who were technically capable of using services such as Application Programming Interfaces (APIs)  

### 3. Contact and Screen Participants

The identified professionals on LinkedIn whose profiles matched our target user groups were contacted via email with an explanation of our research aims, why we felt they were a good fit and a statement /consent form to explain how we would use the information gathered from any interview they might take part in. Again there was a brief screening process to ensure participants worked regularly with environmental data, combined data from multiple sources, and represented diverse sectors (academia, government, consulting, energy).

### 4. Interview and Test our Design  Concepts

The interview was designed to help us get to know the particpants, explore their understanding of the EDS and crucially gather their thoughts on our initial design concepts, through the use of three simple landing page prototypes. 

**Why just prototype landing pages?** 
Google Ventures' customer sprint methodology suggests that artifacts like a landing page mockup can serve as a lean, effective tool to "fast-forward" into the future, enabling teams to see how customers react to a new product idea before any substantial engineering effort begins.

We used three landing page design options to reveal what users truly value by encouraging discussion of trade-offs rather than forcing binary choices.

Our three designs prioritised different features based on our assumptions of what different user types might value more: 
* **Researcher Version**: APIs, Jupyter notebooks, comprehensive data
* **Decision-Maker Version**: Dashboards, visualisations, actionable insights
* **Integrator Version**: Flexible APIs, multiple formats, customisation

## What We Learned
One unexpected discovery was that people who initially appeared to be unknown to us often turned out to be connected to the NERC EDS team through one or two mutual connections. One of our team had found several end user profiles with that had no clear connection to them or EDS, during the screening stages another team member who reviewed the same profiles found that the Linked in connection indicator showed taht one profile was a 2nd degree connection and anpother was a 3rd degree connection. This was actually quite convenient as the initial emails had not ellicited a reply so we asked the mutual connections to make an introduction which resulted in interviews taking place. This did make us wonder whether the community of environmental data users in the UK was a more close-knit network than we had initially thought, or perhaps we need to find a way to cast the net even wider.  

### Two Key User Groups
Of those intereviewed we found that they had a lot common but by discussing the landing page mockups, some difference in what they would prioritise in the EDS emerged:

**Academic Researchers** prioritise analysis-ready datasets, DOIs for citation, willing to reformat and process useful well described data 

**Applied Data Scientists** value the concept of a unified search, cloud-optimised formats, APIs, and tool integration

## Actionable Insights

**What worked:**

* **Starting with literature** quickly identified real user roles
* **LinkedIn research** revealed concrete, real-world use cases
* **Multiple prototypes** stimulated richer discussion than single concepts
* **Screening survey** efficiently qualified participants

**Key lessons:**

* Users span a wide technical spectrum—one size won't fit all
* Data discovery is a bigger problem than we initially thought
* "Analysis-ready" means different things to different users
* Citation and reproducibility matter to academics
* Integration with existing tools is crucial

**Next steps:**

* Refine the process based on feedback and considering how environmental research differs from commercial product design
* Use findings to inform platform development decisions

## Get Involved

Interested in participating in this research? Contact: ux@bgs.ac.uk

## Resources

* Research inspired by "Learn More Faster" (Google Ventures) and "Environmental Data Science: A Pythonic Approach"
* https://notebooklm.google/
