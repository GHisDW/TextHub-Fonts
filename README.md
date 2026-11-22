<div align="center">

# TextHub-Fonts

**The open community font repository for the TextHub ecosystem.**

[![Validate Community Contribution](https://github.com/GHisDW/TextHub-Fonts/actions/workflows/validate-contribution.yml/badge.svg)](https://github.com/GHisDW/TextHub-Fonts/actions/workflows/validate-contribution.yml)
[![License: MIT](https://img.shields.io/badge/Infrastructure_License-MIT-blue.svg)](LICENSE)
[![Open Source Fonts](https://img.shields.io/badge/Fonts-OFL_|_Apache_|_UFL-success.svg)](#licensing)

</div>

---

## About TextHub-Fonts

`TextHub-Fonts` serves as the decentralized font distribution catalogue for the [TextHub Desktop Application](https://github.com/GHisDW/TextHub). It is designed to host, catalog, and serve open-source typography via static endpoints (`raw.githubusercontent.com`) with zero hosting cost, no paid databases, and no closed-door approval processes.

## Repository Architecture

```text
TextHub-Fonts/
├── catalog/
│   └── catalog.json          # Master versioned JSON catalogue consumed by TextHub
├── fonts/
│   ├── <font-id>/
│   │   ├── <FontName>-Regular.ttf
│   │   ├── <FontName>-Bold.ttf
│   │   ├── OFL.txt (or LICENSE)
├── scripts/
│   ├── validate-catalog.js   # Automated CI validator for schema & font integrity
│   └── import-google-fonts.js# Automated Google Fonts sync & licensing harvester
├── .github/
│   └── workflows/
│       └── validate-contribution.yml  # Automated pull request verification
├── CONTRIBUTING.md           # Step-by-step contribution instructions
├── LICENSE                   # Repository infrastructure license
└── README.md
```

---

## Submitting Your Typeface

We welcome original font designs and permissive open-source typefaces! TextHub does not require proprietary user accounts — contributions are handled transparently via GitHub Pull Requests.

### Quick Submission Guide

1. **Design or Export Your Font**:
   Use **TextHub Font Studio** or any vector editor to compile a valid `.ttf` or `.otf` file.

2. **Fork this Repository**:
   Click **Fork** on the top right of this repository.

3. **Add Your Font Files**:
   Create a folder under `fonts/<font-id>/` containing your font files and license:
   ```
   fonts/my-typeface/
     MyTypeface-Regular.ttf
     OFL.txt
   ```

4. **Register in `catalog/catalog.json`**:
   Add an entry into the `fonts` array:
   ```json
   {
     "id": "my-typeface",
     "family": "My Typeface",
     "designer": "Your Name",
     "category": "SANS_SERIF",
     "license": "OFL-1.1",
     "copyright": "Copyright 2026 Your Name",
     "source": "community",
     "tags": ["modern", "clean", "geometric"],
     "styles": [
       {
         "weight": 400,
         "style": "normal",
         "filename": "MyTypeface-Regular.ttf",
         "url": "fonts/my-typeface/MyTypeface-Regular.ttf",
         "format": "ttf"
       }
     ],
     "preview": {
       "text": "The quick brown fox",
       "color": "#1a1a1a"
     }
   }
   ```
   *(You can also use the **Creator Hub** in the TextHub desktop app to auto-generate this snippet).*

5. **Run Local Validation**:
   ```bash
   node scripts/validate-catalog.js
   ```

6. **Submit a Pull Request**:
   Once submitted, GitHub Actions will run the automated suite. Maintainers will review and merge approved entries, making your font instantly discoverable across all TextHub installations worldwide.

---

## Licensing & Legal Requirements

- **Repository Infrastructure**: The scripts, schema, and workflows are licensed under the [MIT License](LICENSE).
- **Font Binaries**: Every individual font family retains its independent open-source license. We strictly accept:
  - **SIL Open Font License 1.1 (OFL-1.1)**
  - **Apache License 2.0 (Apache-2.0)**
  - **Ubuntu Font License 1.0 (UFL-1.0)**
- **Attribution**: Original copyright notices, designer metadata, and license files are permanently preserved verbatim in both the catalogue entries and font subdirectories.

---

## Connected Ecosystem

- **Desktop Application**: [GHisDW/TextHub](https://github.com/GHisDW/TextHub)
