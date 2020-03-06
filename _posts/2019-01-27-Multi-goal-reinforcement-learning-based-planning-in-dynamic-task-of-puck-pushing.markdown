---
layout: post
title: Multi goal reinforcement learning based planning in dynamic task of puck pushing 
date: 2019-01-27 13:32:20 +0300
description: To address the problem of dynamic footstep planning for legged robots, we developed an iterative optimization method that plans in real-time over a receding horizon.  # Add post description (optional)
img: fetch.gif # Add image post (optional)
fig-caption: # Add figcaption (optional)
tags: [Motion Planning, Controls, Deep learning, Reinforcement Learning, Deep Reinforcement Learning]
paper: /assets/pdf/Controls_Project_report.pdf
---
To address the problem of dynamic footstep planning for legged robots, we developed an iterative optimization method that plans in real-time over a receding horizon. We provided analytical solution to linearization of event-based discrete hybrid dynamics, allowing superior accuracy with lower computation and time complexity compared to numerical differentiation. Besides this, we established new method to incorporate terrain as soft-state constraint into the iLQR formulation.

<p align="center">
    <img src="{{site.baseurl}}/assets/img/fetch.gif">
     <figcaption align="center"> Foothold optimization conforming to terrain cost map using gradientdescent of local polynomials. </figcaption>
</p>

<p align="center">
    <img src="{{site.baseurl}}/assets/img/fetch.gif">
     <figcaption align="center"> Hardware implementation done by Abhimanyu and Steven Crews </figcaption>
</p>

>Unified Foothold Section and Motion Planning for Legged Systems in Real-Time, Steven Crews, **Sapan Agrawal**, Matthew Travers, IEEE-RAS International Conference on Humanoid Robots, 2019 [[Paper]](https://1drv.ms/b/s!Ap3y6sk8HvoliPJoPk3gqPMrBzHEZQ).
 
