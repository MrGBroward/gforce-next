// app/layout.jsx
export const metadata = {
  title: "G Force Exterior Cleaning",
  description:
    "Veteran-owned exterior cleaning company specializing in dumpster pad cleaning and professional pressure washing services in Broward, Miami-Dade, and Palm Beach counties.",
  alternates: {
    canonical: "https://getpressurecleaningbroward.com/",
  },
  verification: {
    google: "googlee70c59495ec5ac21.html",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}




