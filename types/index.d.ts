export declare function uniWebviewJS(): {
    name: string;
    configResolved(config: any): void;
};
export declare const uni: {
    getEnv: (func: any) => any;
    postMessage: (value: any) => any;
    navigateTo: (value: object) => any;
    navigateBack: (value: object) => any;
    redirectTo: (value: object) => any;
    reLaunch: (value: object) => any;
    switchTab: (value: object) => any;
};
