import { getSession } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0/client"
import { GetServerSideProps } from "next"

export default function Home() {
  const { user } = useUser()
  
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res)
  
  console.log(session?.accessToken)
  
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/login',
        permanent: false,
      }
    }
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: false,
      }
    }

  }

  return {
    props: {},
  }
}