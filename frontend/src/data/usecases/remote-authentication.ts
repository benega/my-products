import { InvalidCredentialsError } from "../../domain/errors/invalid-credentials-error";
import { UnexpectedError } from "../../domain/errors/unexpected-error";
import { AccountModel } from "../../domain/models/account-model"
import { Authentication, AuthenticationParams } from "../../domain/usecases/authentication"
import { HttpClient, HttpStatusCode } from "../protocols/http-client"

export class RemoteAuthentication implements Authentication {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<AccountModel>
    ) { }

    async auth(params: AuthenticationParams): Promise<AccountModel> {
        const httpResponse = await this.httpClient.request({
            method: "post",
            url: this.url,
            body: params
        })

        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok:
                return httpResponse.body || { token: '' };
            case HttpStatusCode.unauthorized:
                throw new InvalidCredentialsError()
            default:
                throw new UnexpectedError()
        }
    }
}
