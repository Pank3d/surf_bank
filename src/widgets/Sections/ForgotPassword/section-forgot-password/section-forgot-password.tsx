import style from "./section-forgot-password.module.scss";
import { Section, Input, Button } from "@/shared/ui";
import img from "@/assets/images/section-login/img-1.webp";

export const SectionForgotPassword = () => (
  <div className={style.container}>
    <Section className={style.section}>
      <form className={style.form}>
        <h2 className={style.title}>Forgot password</h2>
        <div className={style.inputs}>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
        </div>
        <div className={style.buttons}>
          <Button arrow className={style.button}>
            Sign In
          </Button>
          <span className={style.button__forgot}>Forgot password?</span>
        </div>
      </form>
      <div className={style.img}>
        <img src={img} alt="img" />
      </div>
    </Section>
  </div>
);
