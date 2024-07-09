interface Reaction {
    likes: number
    dislikes: number
}

export interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reaction;
    views: number;
    userId: number;
}

export interface PostResponse {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
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


interface Users {
    id: number
    username: string
    fullName: string
}

interface Comments {
    id: number
    body: string
    postId: string
    likes: number
    user: Users
}
export interface PostComments {
    comments: Comments[]
    total: number
    skip: number
    limit: number
}