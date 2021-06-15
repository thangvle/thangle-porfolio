import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Landing from './landing'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>
          Improv 
        </title></Head>
      <Landing /> 
      
    </Fragment>
    
  )
}
