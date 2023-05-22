export declare function uniWebviewJS(): {
    name: string;
    configResolved(config: any): void;
};
export declare const uni: {
    getEnv: (c: any) => Promise<any>;
    postMessage: (c: any) => Promise<any>;
    navigateTo: (c: any) => Promise<any>;
    navigateBack: (c: any) => Promise<any>;
    redirectTo: (c: any) => Promise<any>;
    reLaunch: (c: any) => Promise<any>;
    switchTab: (c: any) => Promise<any>;
};
