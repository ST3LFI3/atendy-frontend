interface PlaceProps{
    id:string,
    name: string,
    description?:string,
    state:string,
    city:string,
    address:string,
    slug?:string,
    image?:string
}

export type {
    PlaceProps
}