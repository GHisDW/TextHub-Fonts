# Contributing to TextHub-Fonts

Thank you for contributing to the open font ecosystem! TextHub-Fonts welcomes typeface contributions under permissive open-source licenses.

## Requirements

1. **Permissive Licensing**: Accepted licenses include SIL Open Font License 1.1 (OFL-1.1), Apache 2.0, or Ubuntu Font License (UFL-1.0).
2. **Attribution**: Original copyright statements and design authors must be retained verbatim.
3. **No Duplicate Identifiers**: Ensure your chosen font `id` is unique across the repository.
4. **Valid Formats**: TrueType (.ttf) or OpenType (.otf) binaries.

## Step-by-Step Submission

1. Fork this repository to your GitHub account.
2. Place the font binaries and license file in `fonts/<your-font-id>/`:
   ```
   fonts/<your-font-id>/
     <FontName>-Regular.ttf
     OFL.txt (or LICENSE)
   ```
3. Add a corresponding JSON record to `catalog/catalog.json`:
   ```json
   {
     "id": "my-font",
     "family": "My Font",
     "designer": "Creator Name",
     "category": "SANS_SERIF",
     "license": "OFL-1.1",
     "copyright": "Copyright 2026 Author Name",
     "source": "community",
     "tags": ["geometric"],
     "styles": [
       {
         "weight": 400,
         "style": "normal",
         "filename": "MyFont-Regular.ttf",
         "url": "fonts/my-font/MyFont-Regular.ttf",
         "format": "ttf"
       }
     ]
   }
   ```
4. Run the validator locally:
   ```bash
   node scripts/validate-catalog.js
   ```
5. Submit a Pull Request. GitHub Actions will verify your submission automatically.
