---
title: 'On the Limitations of Stochastic Pre-processing Defenses'
authors: 'Yue Gao, Ilia Shumailov, Kassem Fawaz, Nicolas Papernot'
type: 'Conference'
year: 2022
venue: 'NeurIPS 2022'
pdfUrl: 'https://proceedings.neurips.cc/paper_files/paper/2022/file/997089469acbeb410405e43f0011be1f-Paper-Conference.pdf'
link: 'https://openreview.net/forum?id=P_eBjUlzlV'
focus: ['ai', 'math']
---
Defending against adversarial examples remains an open problem. A common belief is that randomness at inference increases the cost of finding adversarial inputs. An example of such a defense is to apply a random transformation to inputs prior to feeding them to the model. In this paper, we empirically and theoretically investigate such stochastic pre-processing defenses and demonstrate that they are flawed. First, we show that most stochastic defenses are weaker than previously thought; they lack sufficient randomness to withstand even standard attacks like projected gradient descent. This casts doubt on a long-held assumption that stochastic defenses invalidate attacks designed to evade deterministic defenses and force attackers to integrate the Expectation over Transformation (EOT) concept. Second, we show that stochastic defenses confront a trade-off between adversarial robustness and model invariance; they become less effective as the defended model acquires more invariance to their randomization. Future work will need to decouple these two effects. We also discuss implications and guidance for future research.
