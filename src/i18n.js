import { createI18n } from "vue-i18n";
import en from './locales/en.json';
import ar from './locales/ar.json';
function loadLocaleMessages()
{
    const languages=[{en:en},{ar:ar}];
    const messages={};
    languages.forEach(lang=>{
        const key=Object.keys(lang);
        messages[key]=lang[key];
    });
    return messages;
}
export default createI18n({
   locale:'ar',
   fallbacklocale:'ar',
   messages:loadLocaleMessages()
});