const fs = require('fs');
const path = require('path');

const catalogPath = path.join(__dirname, '../catalog/catalog.json');
const fontsDir = path.join(__dirname, '../fonts');

function validateCatalog() {
  console.log('Validating TextHub-Fonts catalogue schema and integrity...');

  if (!fs.existsSync(catalogPath)) {
    throw new Error('catalog.json not found');
  }

  const raw = fs.readFileSync(catalogPath, 'utf8');
  const catalog = JSON.parse(raw);

  if (!catalog.version || !catalog.fonts || !Array.isArray(catalog.fonts)) {
    throw new Error('Invalid catalog root structure');
  }

  const seenIds = new Set();
  const validCategories = ['SANS_SERIF', 'SERIF', 'DISPLAY', 'HANDWRITING', 'MONOSPACE'];

  catalog.fonts.forEach((font, idx) => {
    if (!font.id || typeof font.id !== 'string') {
      throw new Error(`Font at index ${idx} missing valid 'id'`);
    }

    if (seenIds.has(font.id)) {
      throw new Error(`Duplicate font id detected: ${font.id}`);
    }
    seenIds.add(font.id);

    if (!font.family || !font.designer || !font.license) {
      throw new Error(`Font '${font.id}' is missing required attribution or license fields.`);
    }

    if (!validCategories.includes(font.category)) {
      throw new Error(`Font '${font.id}' has invalid category: ${font.category}`);
    }

    if (!Array.isArray(font.styles) || font.styles.length === 0) {
      throw new Error(`Font '${font.id}' must provide at least one style entry.`);
    }

    font.styles.forEach((st, sIdx) => {
      if (!st.filename || !st.url) {
        throw new Error(`Style #${sIdx} in '${font.id}' missing filename or url`);
      }
    });
  });

  console.log(`✓ Catalog validated successfully: ${catalog.fonts.length} entries checked.`);
}

validateCatalog();
