export const INCREMENT = 'INCREMENT';

export function increment(authorSurname, value) {
    console.log('increment ', authorSurname, value);
    return {
        type: INCREMENT,
        surname: authorSurname,
        value: value
    }
};