import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  return <h1>username: {router.query.userName}</h1>
}
