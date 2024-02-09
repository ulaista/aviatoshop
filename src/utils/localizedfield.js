// localizationUtils.js или в другом файле утилит
function getLocalizedField(item, fieldKey) {
    const languageRaw = localStorage.getItem('language');
    const language = languageRaw.replace(/"/g, '');
    const localizedKey = `${fieldKey}_${language}`;
    return item[localizedKey] || item[fieldKey] || `No ${fieldKey} available`;
  }
  
export { getLocalizedField };
  