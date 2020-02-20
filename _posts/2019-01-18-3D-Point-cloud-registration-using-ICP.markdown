---
layout: post
title: 3D Point cloud registration using ICP
date: 2019-01-18 00:00:00 +0300
description: In this work, we compare two registration methods ICP and Go-ICP, discussing the benefits and drawbacks of each method and drawing conclusion through analysis of results from each method
img: icp.gif
tags: [Computer Vision, Python] # add tag
---
Applications varying from medical robotics as to mine tunnel profiling require registration of 3D point cloud data for either model construction, pose estimation or mapping. Registration is the process of finding the spatial transformation that aligns a point cloud to a geometric model, defined in different reference frames.  When the correspondences between  the  points  in the two reference frames are known, spatial transformation can be found using a least squares based approach.  However, in most practical applications, the correspondence is unknown. By iteratively finding the best correspondence and the optimal transformation given that  correspondence, Besl  et  al. developed the iterativeclosest point (ICP). In this work, we compare two registration methods ICP and Go-ICP, discussing the benefits and drawbacks of each method and drawing conclusion through analysis of results from each method.
 
<p align="center">
    <img src="{{site.baseurl}}/assets/img/icp.gif">
     <figcaption align="center"> Registering measured (Red) point cloud set with the template (Green). </figcaption>
</p>