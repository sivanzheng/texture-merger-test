interface Block {
    canvas: HTMLCanvasElement;
    info: {
        width: number;
        height: number;
        color: string;
    };
}
export declare const randomInt: (min: number, max: number) => number;
export declare const randomColor: () => string;
export declare const generator: (width: number, height: number, color: string) => Block;
export {};
