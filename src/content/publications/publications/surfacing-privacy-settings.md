---
title: 'Surfacing Privacy Settings Using Semantic Matching'
authors: 'Rishabh Khandelwal, Asmit Nayak, Yao Yao, Kassem Fawaz'
type: 'Conference'
year: 2020
venue: 'PrivateNLP@EMNLP'
pdfUrl: 'https://aclanthology.org/2020.privatenlp-1.4.pdf'
link: 'https://aclanthology.org/2020.privatenlp-1.4/'
focus: ['people', 'ai']
---
Online services utilize privacy settings to provide users with control over their data. However, these privacy settings are often hard to locate, causing the user to rely on provider-chosen default values. In this work, we train privacy-settings-centric encoders and leverage them to create an interface that allows users to search for privacy settings using free-form queries. In order to achieve this goal, we create a custom Semantic Similarity dataset, which consists of real user queries covering various privacy settings. We then use this dataset to fine-tune a state of the art encoder. Using this fine-tuned encoder, we perform semantic matching between the user queries and the privacy settings to retrieve the most relevant setting. Finally, we also use the encoder to generate embeddings of privacy settings from the top 100 websites and perform unsupervised clustering to learn about the online privacy settings types. We find that the most common type of privacy settings are ‘Personalization’ and ‘Notifications’, with coverage of 35.8% and 34.4%, respectively, in our dataset.
