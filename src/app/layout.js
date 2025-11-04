import "./globals.css";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Calendar Self-Reflection",
  description: "A simple app to track your mood and reflections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>
            {children}
        </Layout>
      </body>
    </html>
  );
}
