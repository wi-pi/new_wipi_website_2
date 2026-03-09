---
title: 'A picture is worth 500 labels: A case study of demographic disparities in local machine learning models for Instagram and TikTok'
authors: 'Jack West, Lea Thiemt, Shimaa Ahmed, Maggie Bartig, Kassem Fawaz, Suman Banerjee'
type: 'Conference'  # Options: Conference, Journal, Dissertation, Patent, arXiv
year: 2024
venue: '2024 IEEE Symposium on Security and Privacy'
pdfUrl: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10646743'  # Optional - put PDF in public/pdfs/
link: 'https://ieeexplore.ieee.org/abstract/document/10646743'  # Optional - makes title clickable
bibtex: |  # Optional - custom BibTeX entry (use | for multiline)
  @inproceedings{west2024picture,
  title={A picture is worth 500 labels: A case study of demographic disparities in local machine learning models for Instagram and TikTok},
  author={West, Jack and Thiemt, Lea and Ahmed, Shimaa and Bartig, Maggie and Fawaz, Kassem and Banerjee, Suman},
  booktitle={2024 IEEE Symposium on Security and Privacy (SP)},
  pages={369--387},
  year={2024},
  organization={IEEE}}

focus: ['systems', 'ai']  # Options: systems, people, math, ai
---
Mobile apps have embraced user privacy by moving their data processing to the user’s smartphone. Advanced machine learning (ML) models, such as vision models, can now locally analyze user images to extract insights that drive several functionalities. Capitalizing on this new processing model of locally analyzing user images, we analyze two popular social media apps, TikTok and Instagram, to reveal (1) what insights vision models in both apps infer about users from their image and video data and (2) whether these models exhibit performance disparities with respect to demographics. As vision models provide signals for sensitive technologies like age verification and facial recognition, understanding potential biases in these models is crucial for ensuring that users receive equitable and accurate services.We develop a novel method for capturing and evaluating ML tasks in mobile apps, overcoming challenges like code obfuscation, native code execution, and scalability. Our method comprises ML task detection, ML pipeline reconstruction, and ML performance assessment, specifically focusing on demographic disparities. We apply our methodology to TikTok and Instagram, revealing significant insights. For TikTok, we find issues in age and gender prediction accuracy, particularly for minors and Black individuals. In Instagram, our analysis uncovers demographic disparities in extracting over 500 visual concepts from images, with evidence of spurious correlations between demographic features and certain concepts.