import "./globals.css";

export const metadata = {
  title: "Karthikeya Gadadhasu — Associate Product Manager · Growth · D2C",
  description:
    "Associate Product Manager and growth operator with 2+ years building 0→1 products across D2C, healthcare and entertainment — ₹1Cr+ online revenue, 4x sales growth, 130M+ content views.",
  openGraph: {
    title: "Karthikeya Gadadhasu — Product & Growth",
    description:
      "Associate PM · Marketing Strategy · Growth · D2C. I build 0→1 products and growth systems that turn revenue into a habit.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
