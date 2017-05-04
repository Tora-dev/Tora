export declare function findPlugins(rootPath?: any, targetDir?: string[]): Promise<{
    type: string;
    name: string;
    version: string;
    description: string;
    license: string;
    keyworks: string[];
    author: string;
    main: string;
}[]>;
export declare function loadPlugin(PluginDirPath: string): Promise<{
    type: string;
    name: string;
    version: string;
    description: string;
    license: string;
    keyworks: string[];
    author: string;
    main: string;
}>;
export declare function loadPlugins(): Promise<void>;
