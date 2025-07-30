export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-800 mt-24 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-500">
        <p>&copy; {currentYear} Jhony Wesley Laurindo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}