---
layout: page
title: Multi-Goal RL for Legged Robot Footstep Planning
description: Iterative optimization method using multi-goal reinforcement learning for real-time dynamic footstep planning over a receding horizon for legged robots.
img: assets/img/fetch.gif
importance: 2
category: research
---

To address the problem of dynamic footstep planning for legged robots, we developed an iterative optimization method that plans in real-time over a receding horizon. We provided an analytical solution to the linearization of event-based discrete hybrid dynamics, allowing superior accuracy with lower computation and time complexity compared to numerical differentiation.

We also established a new method to incorporate terrain as a soft-state constraint into the iLQR formulation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fetch.gif" title="Foothold Optimization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Foothold optimization conforming to terrain cost map using gradient descent of local polynomials.
</div>

> **Unified Foothold Selection and Motion Planning for Legged Systems in Real-Time**, Steven Crews, Sapan Agrawal, Matthew Travers, *IEEE-RAS International Conference on Humanoid Robots, 2019*.

**Tags:** Motion Planning · Controls · Deep Learning · Reinforcement Learning · Legged Robots

<a href="/assets/pdf/Controls_Project_report.pdf" class="btn btn-sm z-depth-0" role="button">Report</a>
