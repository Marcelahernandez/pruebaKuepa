export class Brand {
    name: string;
    order: number;
    active: boolean;
    logo: Logo;
}

export class Logo {
    height: number;
    timestamp: Date;
    uri: string;
    fileName: string;
    data: string;
}