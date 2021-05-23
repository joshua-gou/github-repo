import { Language } from "./enums";

export const LANGUAGES: string[] = (() => {
    return Object.entries(Language)
        .map(lang => {
            const [_, value] = lang;
            return value;
        });
})();