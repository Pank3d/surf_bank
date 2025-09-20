import style from "./section-login.module.scss";
import { Section, Input, Button } from "@/shared/ui";
import img from "@/assets/images/section-login/img-1.webp";
import img_mob from "@/assets/images/section-login/img-2.webp";
import { Link } from "react-router-dom";
import { internalPaths } from "@/shared/routes/paths";

const handleSignIn = () => {
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL;
  if (dashboardUrl) {
    window.location.href = dashboardUrl;
  }
};

export const SectionLogin = () => (
  <div className={style.container}>
    <Section className={style.section}>
      <form className={style.form}>
        <h2 className={style.title}>Welcome back</h2>
        <div className={style.inputs}>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
        </div>
        <div className={style.buttons}>
          <Button arrow className={style.button} onClick={handleSignIn}>
            Sign In
          </Button>
          <Link
            to={internalPaths.forgotPassword}
            className={style.button__forgot}
          >
            Forgot password?
          </Link>
        </div>
      </form>
      <div className={style.img}>
        <img src={img} alt="img" />
        <img src={img_mob} alt="img_mob" />
      </div>
    </Section>
  </div>
);
