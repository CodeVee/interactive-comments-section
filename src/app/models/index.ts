

export interface User {
  image: Image
  username: string
}

interface Image {
  png: string
  webp: string
}

export interface Comment {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
  replies: ReplyComment[]
}

interface ReplyComment extends Comment {
  replyingTo: string
}

export interface DataResponse {
  currentUser: User
  comments: Comment[]
}
