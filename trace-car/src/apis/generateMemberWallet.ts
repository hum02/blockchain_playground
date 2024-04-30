import axios, { AxiosResponse } from "axios";
import Config from "../utils/config";

/**
 * Request to write a new event called "Create"
 * @param inputData item data submitted by user
 * @returns created event data or null
 */

const generateMemberWallet = (params: GetWalletAxiosParams): Promise<TraceItem | null> =>
    axios
        .request({
            baseURL: Config.BASE_URL,
            url: Config.GENERATE_WALLET_URL,
            method: "post",
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer ' + params.authorizationCode
            },
            data: JSON.stringify({environmentId: Config.ENVIRONMENT_ID, userKey: params.userKey})

        })
        .then((res: AxiosResponse<TraceItemResponse>) => {
            if (res.data) return res.data.data.event;
            else return null;
        });

export default generateMemberWallet;
