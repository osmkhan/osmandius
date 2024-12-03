import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./globals.css";

// const spectral = Spectral({ 
//   weight: ["400"],  // Simplified to just one weight
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Osman R. Khan",
//   description: "Personal website of Osman R. Khan",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={spectral.className}>
//         {children}
//       </body>
//     </html>
//   )
  
//   ;
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}