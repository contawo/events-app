export type EventType = {
    eventId: string,
    dateMonth: string,
    dateDay: number,
    eventTitle: string,
    eventDescription: string,
    eventBackground: string,
    eventPrice: number,
    eventCurrency?: string
}

export type FormError = {
    emailError: string,
    passwordError: string
}

export type FormType = {
    email: string,
    password: string
}