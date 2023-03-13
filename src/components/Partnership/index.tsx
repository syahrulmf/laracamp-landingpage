import LogoAdobe from "assets/images/logo-adobe.svg";
import LogoApple from "assets/images/logo-apple.svg";
import LogoGoogle from "assets/images/logo-google.svg";
import LogoSlack from "assets/images/logo-slack.svg";
import LogoSpotify from "assets/images/logo-spotify.svg";

type Props = {};

function Partnership({}: Props) {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-y-0 md:gap-x-6 xl:gap-x-12">
        <div className="w-auto">
          <LogoAdobe />
        </div>
        <div className="w-auto">
          <LogoSlack />
        </div>
        <div className="w-auto">
          <LogoGoogle />
        </div>
        <div className="w-auto">
          <LogoApple />
        </div>
        <div className="w-auto">
          <LogoSpotify />
        </div>
      </div>
    </section>
  );
}

export default Partnership;
