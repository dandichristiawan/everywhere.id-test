export function validation
    (
        fullName: string,
        email: string,
        message: string
    ) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const onlyLettersRegex = /^[a-zA-Z ]+$/;
    const errors: { fullName?: string; email?: string; message?: string } = {}

    if (!onlyLettersRegex.test(fullName) || fullName.length < 3) {
        errors.fullName = 'Full name must contain only letters and be at least 3 characters'
    }

    if (!emailRegex.test(email)) {
        errors.email = 'Email address is invalid!'
    }

    if (message.length < 3) {
        errors.message = 'Message must be at least 3 characters'
    }

    return errors

}

export const trimDoubleSpaces = (str: string) => str.replace(/ +(?= )/g, '');