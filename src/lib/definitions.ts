export interface Post {
    id: number
    title: string
    body: string
    views: number
}

export interface SinglePost {
    id: number
    title: string
    body: string
    tags?: string[]
    reactions?: {
        likes: number
        dislikes: number
    }
    views: number
    userId: number
}