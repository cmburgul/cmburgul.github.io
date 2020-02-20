---
layout: post
title: Q Learning
date: 2019-01-15 13:32:20 +0300
description: Playing Breakout Atari game using DQN and Go-to-goal Grid world problem using Q Learning.       
img:  combined.gif # Add image post (optional)
tags: [Deep Reinforcement Learning, OpenAI Gym, Python]
---

Following were homeworks for my CS-525 Reinforcement Learning Course at WPI.
### Playing Atari Games using DQN:
The model is a convolutional neural network, trained with a variant of Q-learning, whose input is raw pixels and whose output is a value function estimating future rewards.   
<p align="center">
    <img src="{{site.baseurl}}/assets/img/breakout.gif" width="40%">
</p>
[[Code]](https://github.com/sapan-ostic/CS-525-Reinforcement-Learning/tree/master/HW%203%20DQN%20Atari%20Games)

### Go-To-Goal Grid world problem using Q Learning
Given a static map of START, GOAL and location of obstacles, the agent learns the best path to the goal from any initial position.
<p align="center">
    <img src="{{site.baseurl}}/assets/img/qlearning.gif" width="40%">
</p>

[[Code]](https://github.com/sapan-ostic/Go-to-goal-grid-problem-using-q-learning)