export {}

declare global {
    interface Account {
        eventId?: string;
        id: string;
        image: number;
        owner: string;
        vin: string;
        plateNumber: string;
        model: string;
        year: number;
        mileage: number;
        description?: string;
        txHash?: string;
    }

    interface MemberWalletResponse {
        "result": boolean,
        "status": number,
        "data": {
            "walletId": string,
            "address": string
        },
        "code": string;
    }

    interface GetWalletAxiosParams {
        userKey: string,
        authorizationCode: string;
    }
}