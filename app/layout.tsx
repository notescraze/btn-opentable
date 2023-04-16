import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="bg-nihyaku-8 min-h-screen w-screen border-[5px] border-yellow-400 md:border-blue-700 lg:border-red-900 xl:border-green-900 2xl:border-orange-500 dark:text-[hsl(220,30%,85%)] font-serif">
          <div className="max-w-screen-2xl m-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
