import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Homes from "./components/Homes";
 import Footer from "./components/Footer";
 import Body from "./components/Body";
 import Information from "./components/Information";
import Thanks from "./components/Thanks"

import Image from "next/image";

export default function Home() {
  return (
    <div>
<title>CAR CROWD</title>
<meta name="description" content="It is all about used and new car"/>
  <Navbar />
  <Homes/>

  <Body/>

  <Information/>

  <Thanks/>

  <Footer/>

    </div>
  )
}
