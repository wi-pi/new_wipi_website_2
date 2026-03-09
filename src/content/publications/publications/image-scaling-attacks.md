---
title: 'Rethinking Image-Scaling Attacks: The Interplay Between Vulnerabilities in Machine Learning Systems'
authors: 'Yue Gao, Ilia Shumailov, Kassem Fawaz'
type: 'Conference'
year: 2022
venue: 'ICML 2022'
pdfUrl: 'https://proceedings.mlr.press/v162/gao22g/gao22g.pdf'
link: 'https://proceedings.mlr.press/v162/gao22g.html'
focus: ['ai', 'math']
---
As real-world images come in varying sizes, the machine learning model is part of a larger system that includes an upstream image scaling algorithm. In this paper, we investigate the interplay between vulnerabilities of the image scaling procedure and machine learning models in the decision-based black-box setting. We propose a novel sampling strategy to make a black-box attack exploit vulnerabilities in scaling algorithms, scaling defenses, and the final machine learning model in an end-to-end manner. Based on this scaling-aware attack, we reveal that most existing scaling defenses are ineffective under threat from downstream models. Moreover, we empirically observe that standard black-box attacks can significantly improve their performance by exploiting the vulnerable scaling procedure. We further demonstrate this problem on a commercial Image Analysis API with decision-based black-box attacks.
