export interface simplifiedProduct{
    _id: string;
    price: number;
    imageUrl: string;
    slug: string;
    categoryName: string;
    name: string;
}

export interface fullProduct{
    _id: string;
    price: number;
    images: any;
    slug: string;
    categoryName: string;
    name: string;
    description: string;
    price_id: string;
}