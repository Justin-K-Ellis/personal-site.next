export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center p-8 md:p-12 border-t">
      <p>Copyright {year} Justin Klitgaard</p>
    </footer>
  );
}
