export const convertName = (availableName) => {
    const convertedName = availableName.toLowerCase().split('').map(element => {
        if (element === ' ') {
            return element = '-'
        }
        return element
    })
    return convertedName.join('')
}