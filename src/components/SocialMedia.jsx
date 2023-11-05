import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/bullshitter_m" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/mido.hamdi.182/" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://github.com/abdelmageed2062019" target="_blank">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
