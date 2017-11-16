export interface IRemote {
    url: string;
    param?: object;
}

export function printRemote(params: IRemote) {
    // tslint:disable-next-line:no-console
    console.log(`${JSON.stringify(params)}`);
}
