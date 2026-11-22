# TextHub-Fonts

> The community font repository for the [TextHub](https://github.com/GHisDW/TextHub) desktop application.

[![Validate Contributions](https://github.com/GHisDW/TextHub-Fonts/actions/workflows/validate-contribution.yml/badge.svg)](https://github.com/GHisDW/TextHub-Fonts/actions/workflows/validate-contribution.yml)

---

## What is this?

TextHub-Fonts is an independent, openly maintained font catalogue. The TextHub desktop application fetches its font catalog and individual font files directly from this repository — no paid backend required.

The catalog is a versioned JSON file. Font files are served as raw GitHub assets.

## Repository Structure

```
TextHub-Fonts/
  catalog/
    catalog.json          # Versioned font catalogue (fetched by TextHub)
  fonts/
    <family-id>/
      <FontFile>.ttf      # Actual font binary
      LICENSE             # Original font licence (preserved verbatim)
      OFL.txt             # (If OFL)
  sources/
    google-fonts/         # Import manifests from Google Fonts
  scripts/
    import-google-fonts.js  # Google Fonts importer
    validate-catalog.js     # Catalogue validator
    sync-catalog.js         # Regenerate catalog.json from fonts/
  .github/
    workflows/
      validate-contribution.yml
      update-catalog.yml
  CONTRIBUTING.md
  LICENSE                 # MIT (repo licence, not font licences)
  README.md
```

## Catalogue Format

Each font in `catalog/catalog.json` has:

| Field | Description |
|-------|-------------|
| `id` | Unique kebab-case identifier |
| `family` | Font family display name |
| `designer` | Original type designer(s) |
| `category` | `SANS_SERIF`, `SERIF`, `DISPLAY`, `HANDWRITING`, or `MONOSPACE` |
| `license` | SPDX license identifier (`OFL-1.1`, `Apache-2.0`, `UFL-1.0`) |
| `copyright` | Verbatim copyright string from the font file |
| `source` | `google-fonts` or `community` |
| `styles` | Array of weight/style/filename/url entries |
| `tags` | Search tags |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the full guide.

**Quick summary:**

1. Fork this repository
2. Add your font files under `fonts/<family-id>/`
3. Add a license file (required)
4. Add an entry to `catalog/catalog.json`
5. Open a pull request
6. GitHub Actions will validate your submission automatically
7. A maintainer will review and merge

**We will not merge:**
- Fonts without a valid open-source licence
- Fonts with missing copyright notices
- Duplicate font IDs
- Files that fail validation

## Font Licensing

**Every font has its own licence.** The `LICENSE` file in this repository root covers only the scripts and infrastructure — not the fonts.

Each font entry in the catalogue includes:
- The original `license` field (SPDX identifier)
- A link to the original `license_url`
- The verbatim `copyright` string

Always check the individual font's licence before use.

## Google Fonts Integration

This repository includes a subset of fonts from [Google Fonts](https://github.com/google/fonts). These are used under their original licences (Apache-2.0, OFL-1.1, UFL-1.0). Google does not endorse TextHub.

---

**TextHub-Fonts** is maintained by the [TextHub community](https://github.com/GHisDW/TextHub).
