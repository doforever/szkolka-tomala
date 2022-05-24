import * as React from "react";
import Header from '../Header/Header';

type Props = {
  children?: React.ReactNode;
};

// markup
const Layout = ({children}: Props) => {
  return (
   <div>
     <Header/>
      <main className="lg:container lg:mx-auto">{children}</main>
   </div>
  )
}

export default Layout;
