import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from '@material-ui/core'

const Home: NextPage = () => {
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  )
}

export default Home
