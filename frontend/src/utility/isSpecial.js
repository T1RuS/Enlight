export const isSpecial = (string) => {
    const specials = ['!', '(', ')', '.', '/', ',', '+', '-', '$']
    let result = false

    specials.map(symbol => {
        if (string.indexOf(symbol) !== -1)
            result = true;

        return symbol;
    })

    return result
}