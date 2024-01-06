import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const lottieSrc = {
  src: `https://lottie.host/70602f56-f245-4f64-8bb1-a597dbe8741e/Y5oWC8sCxF.json`,
};

const LoginHeader = (): JSX.Element => {
  return (
    <section id="login-header">
      <div className="lottie">
        <DotLottiePlayer
          autoplay={true}
          loop={true}
          src={lottieSrc.src}
          className="img"
        />
      </div>
      <div className="title">
        <h2>
          Partagez vos fichiez en ligne grâce à <span>FileShare</span>
        </h2>
      </div>
    </section>
  );
};

export default LoginHeader;
