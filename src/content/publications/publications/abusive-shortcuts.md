---
title: 'Abusability of automation apps in intimate partner violence'
authors: 'Shirley Zhang, Paul Chung, Jacob Vervelde, Nishant Korapati, Rahul Chatterjee, Kassem Fawaz'
type: 'Conference'
year: 2025
venue: 'USENIX Security'
link: 'https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-shirley'
pdfUrl: 'https://www.usenix.org/system/files/usenixsecurity25-zhang-shirley.pdf'
focus: ['ai', 'systems', 'people']
bibtex: |
    @inproceedings{zhang2025abusability,
      title={Abusability of automation apps in intimate partner violence},
      author={Zhang, Shirley and Chung, Paul and Vervelde, Jacob and Korapati, Nishant and Chatterjee, Rahul and Fawaz, Kassem},
      booktitle={34th USENIX Security Symposium (USENIX Security 25)},
      pages={41--60},
      year={2025}
    }
---
Automation apps such as iOS Shortcuts and Android Tasker enable users to "program" new functionalities, also called recipes, on their smartphones. For example, users can create recipes to set the phone to silent mode once they arrive at their office or save a note when an email is received from a particular sender. These automation apps provide convenience and can help improve productivity. However, these automation apps can also provide new avenues for abuse, particularly in the context of intimate partner violence (IPV). This paper systematically explores the potential of automation apps to be used for surveillance and harassment in IPV scenarios. We analyze four popular automation apps—iOS Shortcuts, Samsung Modes & Routines, Tasker, and IFTTT—evaluating their capabilities to facilitate surveillance and harassment. Our study reveals that these tools can be exploited by abusers today to monitor, impersonate, overload, and control their victims. The current notification and logging mechanisms implemented in these automation apps are insufficient to warn the victim about the abuse or to help them identify the root cause and stop it. We therefore built a detection mechanism to identify potentially malicious Shortcuts recipes and tested it on 12,962 publicly available Shortcuts recipes. We found 1,014 recipes that can be used to surveil and harass others. We then discuss how users and platforms mitigate such abuse potential of automation apps.