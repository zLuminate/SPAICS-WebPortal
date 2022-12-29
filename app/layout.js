import NavBar from "./components/navbar";
import Footer from "./components/footer";
import './globals.css';

export default async function RootLayout({ children }) {
  return (
    <html>
      {/* <head></head> */}
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}