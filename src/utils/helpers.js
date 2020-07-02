export const convertName = (availableName) => {
    const convertedName = availableName.toLowerCase().split('').map(element => {
        if (element === ' ') {
            return element = '-'
        }
        return element
    })
    return convertedName.join('')
}


export const splitUrl = url => {
    if (url) {
        const newUrl = url.split('/')
        console.log(newUrl[newUrl.length - 1])
        return newUrl[newUrl.length - 1]
    }
}

export const isEmpty = item => {
    if (item === '' || item === null) {
        return 'N/A'
    }
    return item
}