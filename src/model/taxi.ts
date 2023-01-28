export type TTaxi = {
    readonly address: string
    readonly addressDestination: string

    readonly distance: string
    readonly time: string

    readonly cost: string
}

export const taxiTestData: TTaxi = {
    address: 'Oba, Keykubat Blv. No: A D:73, 07400 Alanya/Antalya',
    addressDestination: 'Saray, Galatasaray Cd. No:49, 07400 Alanya/Antalya',
    time: '29 m',
    distance: '12 km',
    cost: '178'
}