import Link from 'next/link'

import { useRouter } from 'next/router'

export default function Todo() {
  const router = useRouter()

  const todoId = router.query.todoId

  return (
    <>
      <Link href="/todos">
        <a>Voltar</a>
      </Link>
      <h1>Exibindo o todo: {todoId}</h1>
      <p>
        Comentário: lá lá lá
        <Link href={`/todos/${todoId}/comment/1`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentário: le le le
        <Link href={`/todos/${todoId}/comment/2`}>
          <a>Detalhes</a>
        </Link>
      </p>
      <p>
        Comentário: li li li
        <Link href={`/todos/${todoId}/comment/3`}>
          <a>Detalhes</a>
        </Link>
      </p>
    </>
  )
}
