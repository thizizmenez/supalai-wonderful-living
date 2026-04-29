import closingBanner from '@/assets/closing-banner.jpg';
import closingBannerMobile from '@/assets/closing-banner-mobile.jpg';

const ClosingSection = () => {
  return (
    <section className="relative flex min-h-screen h-[100svh] items-center justify-center overflow-hidden">
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${closingBannerMobile})`, backgroundPosition: 'center center' }}
      />
      {/* Desktop background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${closingBanner})` }}
      />
    </section>
  );
};

export default ClosingSection;
