---
permalink: /
title: "Zhexian Zhou (Jako) — Profile"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I’m **Zhexian (Jako) Zhou**, an M.S. student in **Artificial Intelligence Engineering (ECE)** at **Carnegie Mellon University**, and a **Research Assistant** at **CMU AirLab / Team Chiron**. My work focuses on **multimodal Vision-Language Models (VLMs)** for embodied triage systems and **informative 2D/3D skeletonization** methods with strong geometric guarantees.

**Contact**
- Email: [jakozhou@gmail.com](mailto:jakozhou@gmail.com)
- GitHub: [JakoError](https://github.com/JakoError){:target="_blank"}
- LinkedIn: [linkedin.com/in/zhexianzhou](https://linkedin.com/in/zhexianzhou){:target="_blank"}
- Website: [jakoerror.github.io](https://jakoerror.github.io/){:target="_blank"}

---

## Education
- **Carnegie Mellon University (CMU)**, Pittsburgh, PA  
  **M.S. in Artificial Intelligence Engineering (ECE)**, GPA: **4.0** — *Aug 2024 – Dec 2025*  
  Lab: [CMU AirLab](https://theairlab.org/){:target="_blank"} / [Team Chiron](https://teamchiron.ai/){:target="_blank"} (Advisor: Prof. [Sebastian Scherer](https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/){:target="_blank"})  
  Coursework: Advanced Computer Vision, ML, Deep Learning, Trustworthy AI, Estimation/Detection/Learning, Systems & Tool Chains for AI
- **University of Electronic Science and Technology of China (UESTC)**, Chengdu, China  
  **B.E. in Software Engineering (Elite Program)**, GPA: **3.94** — *Aug 2020 – Jul 2024*

---

## Research Interests
- Multimodal VLMs (RGB-IR), VQA, embodied/edge inference systems
- Geometric vision: distance transforms, medial axis/surface, topology-aware thinning
- Hardware-aware ML: quantization, KV-cache optimization, efficient deployment

---

## Research Experience
- **Research Assistant — CMU AirLab & Team Chiron (DARPA Triage Challenge)** — *Sep 2024 – Present*  
  - Built ROS2-based end-to-end edge inference + benchmarking pipeline for multimodal triage VQA (UAV/UGV), supporting SOTA VLM APIs (QwenVL, InternVL, Llama, VILA).
  - Proposed **RGB-IR knowledge transfer** and SFT fine-tuned NVILA, improving **IR Hemo Acc: 36.6% → 54.1%**.
  - Implemented **quantization + multi-turn KV-cache** optimizations on AGX Orin for real-time follow-ups (**< 1s latency**).
  - Developed **Air-Infer** for streaming ROS2 messages and vision tensors over gRPC/HTTP: [github.com/JakoError/air-infer](https://github.com/JakoError/air-infer){:target="_blank"}.
- **Researcher — 2D/3D Skeletonization (CMU AirLab)** — *Mar 2025 – Present*  
  - Proposed **feature-aware envelope EDT** with **geometry-adaptive neighborhood interpolation**, improving reduction rate **96.51% → 96.81%** while increasing reconstruction IoU **88.14% → 99.59%** (2D scikit-image blob dataset).
- **Undergrad Researcher — Semi-supervised Semantic Segmentation (UESTC)** — *Oct 2022 – Jun 2024*  
  - Outstanding Thesis (UESTC 2024): dynamic confidence + edge-aware semi-supervised learning for sparse segmentation; mIoU **70.5 → 76.0 → 83.9 → 86.9** as supervision rate **10 → 20 → 50 → 100**.
  - Geometry-aware route-pattern recognition for tubular structures (e.g., vessels).
- **Undergrad Researcher — Memristor Computing (UESTC)** — *Jan 2023 – Jun 2024*  
  - Fixed-point FFT and evolutionary algorithms mapped to memristor crossbar circuits; validated via circuit-level simulations and noise-mitigation design.
- **Researcher — Tibetan Language Automatic Recognition (UESTC & TibetU)** — *Jun 2022 – Jun 2024*  
  - Built diffusion-based OCR/scene-text augmentation platform integrated into the project training pipeline.
  - MoST China 2030 Key R&D Program (No. 2022ZD0116100).
- **Research Intern — NeRF for Surrounding-View Reconstruction (Peking University)** — *May 2023 – Aug 2023*  
  - Adapted NeRF for urban scenes; trained on KITTI and transferred to nuScenes for improved 3D rendering.

---

## Publications
- **Accepted (ICLR 2026)**: Luo, Y., **Zhou, Z.**, Chen, H., Qiu, K., Savvides, M., Li, S., Wang, J.  
  *KnowledgeSmith: Uncovering Knowledge Updating in LLMs with Model Editing and Unlearning.*  
  arXiv: [2510.02392](https://arxiv.org/abs/2510.02392){:target="_blank"} · OpenReview: [znnA2Opw6v](https://openreview.net/forum?id=znnA2Opw6v){:target="_blank"}
- **CAIT 2023**: **Z. Zhou** et al. *Design of Fixed-point FFT Algorithm Based on Memristor.*  
  DOI: [10.1109/CAIT59945.2023.10468999](https://doi.org/10.1109/CAIT59945.2023.10468999){:target="_blank"}
- **ICCIP ’23 (Proc. 2024)**: X. Zhong, Y. Yu, C. Zhou, X. Wang, X. Feng, **Z. Zhou**, et al.  
  *A Matrix Coding Genetic Algorithm Based on Memristor for Image Edge Detection.*  
  DOI: [10.1145/3638884.3638895](https://doi.org/10.1145/3638884.3638895){:target="_blank"}

---

## Selected Projects
- **Air-Infer (ROS2 ↔ gRPC/HTTP streaming)** — Robust transmission of ROS2 messages and vision tensors for inference pipelines  
  [github.com/JakoError/air-infer](https://github.com/JakoError/air-infer){:target="_blank"}
- **MatSAR — C++ Math Toolkits** — Cross-platform C++ toolkit (matrix core + ops + math functions); led development of 200+ algorithms (Linear Algebra / DSP / Calculus). *(Open-sourcing in progress.)*
- **C++ Database Management System** — Server-client DBMS with core storage/query components  
  [github.com/JakoError/cppDBMS](https://github.com/JakoError/cppDBMS){:target="_blank"}
- **Compiler Toolkits (SysY)** — Flex/Bison compiler with IR generation and basic optimization  
  [github.com/JakoError/CompileStudy](https://github.com/JakoError/CompileStudy){:target="_blank"}
- **DiaryInUESTC (Mobile App)** — Diary/bookkeeping/memo app with AMap and MyBatis persistence  
  [github.com/JakoError/DiaryInUESTC](https://github.com/JakoError/DiaryInUESTC){:target="_blank"}

---

## Skills
- **Languages**: C/C++, Python, Java, MATLAB, SQL, JavaScript, HTML/CSS  
- **Frameworks**: ROS2, PyTorch, PyTorch Lightning, TensorFlow/Keras, NumPy, gRPC/REST, PySpark, Spring Boot  
- **Tools**: Git, Docker, AWS, VS Code, Visual Studio, GCC, CMake

---

## Honors & Awards
- Outstanding Undergraduate Thesis Award — UESTC (Jun 2024)  
- Outstanding Graduate Award — UESTC (Jun 2024)  
- Science & Technology Innovation Seedling Award — Sichuan Program (Oct 2023)  
- CASC Scholarship — China Aerospace Science and Technology Corporation (Dec 2022)  
- Academic Outstanding Student Scholarship — UESTC (Dec 2021, Dec 2022)  
- China Southwest Hackathon — 3rd Place (Final) (Oct 2020)

---

If you like, here is an old history → [Old History](/old_history/)
