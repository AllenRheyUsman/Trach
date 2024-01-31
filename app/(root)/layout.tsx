import { FlowbiteNavBar, Footer } from "@/components";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <div className=" relative ">  
     <FlowbiteNavBar/> 
          
      <main  className="flex-1">{children}</main>
      <Footer/>
    </div>
      
   
  );
}
