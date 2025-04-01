import { COPYRIGHT } from '@shared/constants';

const Footer = () => {
  return (
    <footer
      className="
        fixed
        bottom-0
        inset-x-0
        z-50
        mx-auto
        max-w-[66rem]
        rounded-t-[26px]        /* Solo redondea la parte superior */
        border border-secondary-dark
        bg-background
        shadow-medium
        p-4
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Marca / Copyright */}
        <span className="text-sm text-primary">
          {COPYRIGHT}
        </span>

        {/* Enlaces del Footer */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="text-foreground hover:text-primary-dark focus:text-primary-dark text-sm"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary-dark focus:text-primary-dark text-sm"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-foreground hover:text-primary-dark focus:text-primary-dark text-sm"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
