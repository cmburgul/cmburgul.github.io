---
layout: page
title: Within Hand Manipulation using RL
description: Model-free reinforcement learning approach for planning within-hand manipulation tasks in robotic systems with multiple DOF and contact points.
img: assets/img/ff_finger.gif
importance: 1
category: research
---

Within Hand Manipulation (WIHM) is seen as a good skill in Robotic Manipulation tasks which reduces manipulation complexity in scenarios where an object needs to be re-oriented or re-positioned to perform a given task. The WIHM system involves multiple Degrees of Freedom, multiple points of contact and varying friction forces. This makes the kinematic and dynamic modeling of the system a complex task.

Inaccurate mathematical models will not suffice for accurately planning a trajectory using conventional control systems. Hence, this project explores a **model-free approach** for planning of WIHM tasks using Reinforcement Learning Techniques.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ff_finger.gif" title="Within Hand Manipulation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Within-hand manipulation task demonstration using reinforcement learning.
</div>

> This work was carried out as a Masters Research under **Dr. Berk Calli** and **Dr. Jing Xiao** at Worcester Polytechnic Institute (WPI).

**Tags:** Motion Planning · Deep Reinforcement Learning · Deep Learning · Robotic Manipulation

<a href="/assets/pdf/Directed_Research_Report.pdf" class="btn btn-sm z-depth-0" role="button">Report</a>
