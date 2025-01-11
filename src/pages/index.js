import NavBar from "@/components/Navbar";
import TestButton from "@/components/TestButton";
import Header from "@/components/Header";
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();
  function handleCtaClick() {
    console.log('CTA button clicked!');
    router.push('/sign-up');
  }
  
  const divStyle = {
    backgroundImage: 'url(/imgs/book-cafe.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'black',
    height: '100vh',
    color: 'black',
};
  return (
  <>  
  <NavBar menuItems={["HOME", "ABOUT", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
  <div style={divStyle}>
  <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
  <center><TestButton label="SIGN UP" handleClick={handleCtaClick} className="mt-60"/></center>
  </div>
  </>
  )
}