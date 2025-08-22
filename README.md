# Pharmacokinetics and Pharmacodynamics (PK/PD) of Antimicrobials and Novel Agents for Trainees

## Introducing foundational PK/PD principles with a focus on antimicrobial agents, dose optimization, and drug development

**A workshop**  sponsored by the Gulf Coast Consortium for Antimicrobial Resistance, co-sponsored by the Consortium for Innovative Drug Discovery and Development (IDDD), and organized by the GCC AMR Scholars Program

**Organizers:** 
<a href="https://orcid.org/0000-0001-5486-4945" target="_blank"> Jacob K. McPherson <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" width="16" height="16" alt="ORCID iD"/></a>, 
<a href="https://orcid.org/0000-0001-5314-0961" target="_blank"> Alex Kang <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" width="16" height="16" alt="ORCID iD"/></a>, 
<a href="https://orcid.org/0009-0001-8884-1298" target="_blank"> Chetna Dureja <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" width="16" height="16" alt="ORCID iD"/></a>, 
<a href="https://orcid.org/0009-0009-0596-4996" target="_blank"> Hossaena Ayele <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" width="16" height="16" alt="ORCID iD"/></a>, 
<a href="https://orcid.org/0000-0003-4767-8866" target="_blank"> Ann McKelvey <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" width="16" height="16" alt="ORCID iD"/></a>, 

**Q/A Panel:**
<a href="https://orcid.org/0000-0002-6645-406X" target="_blank"> Taryn A Eubank <img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" width="16" height="16" alt="ORCID iD"/></a>,
more to be confirmed  

**Date & Location:** September 30th, 10:00 AM, Bioscience Research Collaborative, 6500 Main St, Houston, TX 77030  

**Registration:** Eventbrite  


> [![Deploy Presentation](https://github.com/JacobKMcPherson/workshop_pkpd_antimicrobials/actions/workflows/render-and-deploy.yml/badge.svg)](https://github.com/JacobKMcPherson/workshop_pkpd_antimicrobials/actions/workflows/render-and-deploy.yml)
> [![PDF Build](https://github.com/JacobKMcPherson/workshop_pkpd_antimicrobials/actions/workflows/pdf-release.yml/badge.svg)](https://github.com/JacobKMcPherson/workshop_pkpd_antimicrobials/actions/workflows/pdf-release.yml)
> [![View Presentation](https://img.shields.io/badge/Quarto-Presentation-blue?logo=quarto)](https://jacobkmcpherson.github.io/workshop_pkpd_antimicrobials/)
> 
> 🚀 **[Launch the Live Quarto Presentation](https://jacobkmcpherson.github.io/workshop_pkpd_antimicrobials/)**  Hosted on GitHub Pages 
> 
> 📄 **[Download PDF Version](https://github.com/JacobKMcPherson/workshop_pkpd_antimicrobials/releases/latest)** Available in GitHub Releases 


## Event Description

This workshop introduces trainees to the fundamental principles of pharmacokinetics and pharmacodynamics (PK/PD), with a particular emphasis on antimicrobial agents. Participants will learn how PK/PD modeling informs dose selection, regimen optimization, and the translation of preclinical findings into clinical trial design. By highlighting the role of PK/PD as a bridge between laboratory research and clinical drug development, the workshop will illustrate how these principles guide decision-making across the drug development pipeline—from candidate selection to regulatory approval. 

## Intended Audience
Graduate students, pharmacy students, and postdoctoral fellows of microbiology, immunology, pharmaceutical sciences, and translational sciences.

## Objectives
Upon completion of this course, the participant should be able to:

1. Describe the fundamental concepts of pharmacokinetics and pharmacodynamics (PK/PD).
2. Discuss the design and utility of PK/PD studies, including hands-on applications using R programming.
3. translate clinical PK/PD to dose optimization using R programming.
4. Identify PK/PD considerations for new drug development.

## Agenda Overview

| Time                | Duration  | Topic                                                                             | Objective       |
|---------------------|-----------|-----------------------------------------------------------------------------------|-----------------|
| **10:00** – 10:30   | 30 min    | Introduction to PK/PD: in vitro hollow-fiber models (HFM), pre-clinical in vivo animal models, clinical drug therapy monitoring (DTM) | One |
| **10:30** – 11:00   | 30 min    | **Group-specific assignment of in vitro HFM**                                         | Two             |
| **11:00** – 11:15   | _15 min_  | _Break_                                                                           | —               |
| **11:15** – 12:00   | 45 min    | **Group-specific assignment of six clinical cases**                                   | Three           |
| **12:00** – 12:45   | 45 min    | Lunch and Panel Q&A                                                               | —               |
| **12:45** – 1:15    | 30 min    | Patient presentation and suggestions for dose optimization (5 min/group)          | Bonus           |
| **1:15** – 2:00     | 45 min    | **PK/PD Considerations for Innovative Drug Discovery and Development**                | Bonus           |

## 📁 Repository Structure

```
├── .github/workflows/
│   ├── render-and-deploy.yml    # GitHub Actions workflow to render and deploy to GitHub Pages
│   └── pdf-release.yml          # GitHub Actions workflow to build and release PDF
├── _extensions/clean/           # "clean" theme extension for Quarto
│   ├── _extension.yml           # Metadata/config for the clean theme extension
│   └── clean.scss               # Custom SCSS styles for the clean theme
├── .gitignore                   # Files and folders to ignore in Git version control
├── .quartoignore                # Files and folders to exclude from Quarto rendering
├── CONTRIBUTING.md              # Contribution guidelines for the repo
├── LICENSE                      # Project license
├── README.md                    # THIS FILE/Project overview and usage instructions
├── _quarto.yml                  # Main Quarto project configuration (format, theme, options)
├── index.html                   # Rendered output (presentation entry point)
└── template.qmd                 # Source file for the presentation
```

## 📚 Resources

- [Quarto Documentation](https://quarto.org/docs/)
- [RevealJS Features](https://quarto.org/docs/presentations/revealjs/)
- [Clean Theme Documentation](https://github.com/grantmcdermott/quarto-revealjs-clean)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This template is based on the clean theme by Grant McDermott and is available under the MIT License.
