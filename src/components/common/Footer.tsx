import { BRAND_SOCIAL_MEDIA, COPYRIGHT } from '@shared/constants';

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
        lg:block
        hidden
        shadow-high-top
        p-4

        glass-secondary
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Marca / Copyright */}
        <span className="text-sm text-primary">
          {COPYRIGHT}
        </span>

        {/* Enlaces del Footer */}
        <div className="flex flex-wrap items-center gap-6">
          {
            BRAND_SOCIAL_MEDIA.map((socialMedia, index) => (
              <a
                key={index}
                href={socialMedia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary-dark focus:text-primary-dark text-sm flex flex-row items-center gap-2"
              >
                <img
                  src={socialMedia.icon}
                  alt={socialMedia.name}
                  className="w-6 h-6"
                />
                {socialMedia.name}
              </a>
            ))
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;
