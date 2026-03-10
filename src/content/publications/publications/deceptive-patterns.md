---
title: 'Automatically Detecting Online Deceptive Patterns'
authors: 'Asmit Nayak, Yash Wani, Shirley Zhang, Rishabh Khandelwal, Kassem Fawaz'
type: 'Conference'
publishDate: 2025-11-22
year: 2025
venue: 'ACM CCS'
link: 'https://dl.acm.org/doi/10.1145/3719027.3765191'
pdfUrl: 'https://dl.acm.org/doi/pdf/10.1145/3719027.3765191'
focus: ['ai', 'systems']
projectUrl: https://wiscprivacy.com/deceptive-patterns/
githubUrl: https://huggingface.co/spaces/WIPI/DeceptivePatternDetector
huggingFaceUrl: https://huggingface.co/datasets/WIPI/deceptive_patterns_synthetic
slidesUrl: https://wiscprivacy.com/deceptive-patterns/assets/slides/ccs_2025.pptx
bibtex: |
  @inproceedings{nayak2025automatically,
    author = {Nayak, Asmit and Wani, Yash and Zhang, Shirley and Khandelwal, Rishabh and Fawaz, Kassem},
    title = {Automatically Detecting Online Deceptive Patterns},
    year = {2025},
    isbn = {9798400715259},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3719027.3765191},
    doi = {10.1145/3719027.3765191},
    booktitle = {Proceedings of the 2025 ACM SIGSAC Conference on Computer and Communications Security},
    pages = {96–110},
    numpages = {15},
    keywords = {automated detection of deceptive patterns, computer vision, deceptive patterns, knowledge distillation, multi-modal large language models, synthetic data generation, ui element detection},
    location = {Taipei, Taiwan},
    series = {CCS '25}
  }
---
Deceptive patterns in digital interfaces manipulate users into making unintended decisions, exploiting cognitive biases and psychological vulnerabilities. These patterns have become ubiquitous on various digital platforms. While efforts to mitigate deceptive patterns have emerged from legal and technical perspectives, a significant gap remains in creating usable and scalable solutions. We introduce our AutoBot framework to address this gap and help web stakeholders navigate and mitigate online deceptive patterns. AutoBot accurately identifies and localizes deceptive patterns from a screenshot of a website without relying on the underlying HTML code. AutoBot employs a two-stage pipeline that leverages the capabilities of specialized vision models to analyze website screenshots, identify interactive elements, and extract textual features. Next, using a large language model, AutoBot understands the context surrounding these elements to determine the presence of deceptive patterns. We also use AutoBot, to create a synthetic dataset to distill knowledge from 'teacher' LLMs to smaller language models. Through extensive evaluation, we demonstrate AutoBot's effectiveness in detecting deceptive patterns on the web, achieving an F1-score of 0.93 in this task, underscoring its potential as an essential tool for mitigating online deceptive patterns.
We implement AutoBot, across three downstream applications targeting different web stakeholders: (1) a local browser extension providing users with real-time feedback, (2) a Lighthouse audit to inform developers of potential deceptive patterns on their sites, and (3) as a measurement tool for researchers and regulators.