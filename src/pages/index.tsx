import Layout from '@/components/Public/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <>
      <Seo title="Atendy" description='Atendy | Agende facilmente e evite filas'/>
      <Layout />
    </>
  )
}
