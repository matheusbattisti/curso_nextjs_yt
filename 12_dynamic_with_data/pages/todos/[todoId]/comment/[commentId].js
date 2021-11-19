import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Comment() {
  const router = useRouter()

  console.log(router.query)

  const todoId = router.query.todoId
  const commentId = router.query.commentId

  return (
    <>
      <Link href={`/todos/${todoId}`}>
        <a>Voltar</a>
      </Link>
      <h1>Exibindo o comentário número: {commentId}</h1>
    </>
  )
}
