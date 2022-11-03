interface Params {
    [propName: string]: string;
}
export declare const addSearchParams: (searchParamsString: string, params: Params) => string;
export declare const delSearchParams: (searchParamsString: string, keys: string[]) => string;
export declare const getSearchParams: (searchParamsString: string) => Params;
export {};
