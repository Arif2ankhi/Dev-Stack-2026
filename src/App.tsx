import { Suspense } from "react";
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Stacks from "./stacks/Stacks"
import type { Istacks } from "./types/stack";

const stacksFetch = async():Promise<Istacks[]>=> {
  const res = await fetch('./data.json')
  const data = await res.json();
  return data

};

function App() {
  const stacksPromise = stacksFetch();
  console.log(stacksPromise);


  return (
    <>
      <Nav></Nav>
      <Banner></Banner>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Stacks stacksPromise={stacksPromise}></Stacks>
      </Suspense>
      
  
     <Footer></Footer>  
    </>
  )
}

export default App
