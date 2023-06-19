

export interface User {
  image: Image
  username: string
}

interface Image {
  png: string
  webp: string
}

export interface UserComment {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
  replyingTo?: string
  replies: UserComment[]
}


export interface DataResponse {
  currentUser: User
  comments: UserComment[]
}
