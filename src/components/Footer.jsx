const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-neutral-900 py-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-medium">
          &copy; {currentYear} Sarang P Achari. Built with Passion.
        </p>
        <div className="flex gap-4 items-center">
          <div className="h-[1px] w-8 bg-neutral-800"></div>
          <p className="text-neutral-600 text-[9px] italic font-light tracking-wide">
            MERN Stack Developer | UI Designer
          </p>
          <div className="h-[1px] w-8 bg-neutral-800"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;