export const capitalize = (string) => string[0].toUpperCase() + string.substring(1).toLowerCase()

export const studentLink = (student) => {
    if (!student.firstName || student.firstName.length <= 0) return replaceSpecialChars(student?.lastName) + '-' + replaceSpecialChars(student?.middleName) + '-' + student?.id.toString()
    return replaceSpecialChars(student?.lastName) + '-' + replaceSpecialChars(student?.middleName) + '-' + replaceSpecialChars(student?.firstName) + '-' + student?.id.toString()
}

export const replaceSpecialLetters = (str) => {
    if (!str) return
    const charMap = {
        'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A',
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
        'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
        'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I',
        'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
        'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O', 'Ø': 'O',
        'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ø': 'o',
        'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U',
        'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
        'Ý': 'Y', 'ý': 'y', 'ÿ': 'y',
        'Ç': 'C', 'ç': 'c',
        'Ñ': 'N', 'ñ': 'n'
    };

    return str.replace(/[^\w\s]/gi, (matched) => {
        if (matched == '-') return matched
        return charMap[matched] || '';
    });
}

export function replaceSpecialChars(text) {
    if (!text) return
    const newtext = replaceSpecialLetters(text)
    if (!newtext) return
    return newtext.replace(/[ \/\?\%\:;\=\+@\[\]\(\)\{\}\,\.\'\"\`]/g, "-").toLowerCase()
}