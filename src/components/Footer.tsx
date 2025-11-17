const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container-custom">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Matyáš Brtáň. Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-muted-foreground">
            Programování • Technologie • Digitální řešení
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
