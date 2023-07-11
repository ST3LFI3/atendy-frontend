import LayoutHome from '@/components/Home/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Seo from '../components/Seo'
import { ListPlaces } from '@/components/Home/ListPlaces'

export default function Home() {
  return (
    <>
      <Seo title="Atendy" description='Atendy | Agende facilmente e evite filas'/>
      <LayoutHome >
        <ListPlaces />
      </LayoutHome>
    </>
  )
}
