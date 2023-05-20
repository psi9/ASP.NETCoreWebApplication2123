export class ShlakiRequest {
    constructor(type: number | undefined, name: string | undefined) {
        this.type = type ?? 0
        this.name = name ?? '' 
    }
    type: number
    name: string
}