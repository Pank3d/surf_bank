import style from "./section-forgot-password.module.scss";
import { Section, Input, Button } from "@/shared/ui";
import img from "@/assets/images/section-login/img-1.webp";
import img_mob from "@/assets/images/section-login/img-2.webp";
import { useState } from "react";

export const SectionForgotPassword = () => {
  const [value, setValue] = useState<"email" | "password">("email");

  return (
    <div className={style.container}>
      <Section className={style.section}>
        <form onSubmit={(e) => e.preventDefault()} className={style.form}>
          <h2 className={style.title}>
            {value === "email" ? "Forgot password" : "New password"}
          </h2>
          <div className={style.inputs}>
            {value === "email" ? (
              <Input placeholder="Enter email address" />
            ) : (
              <>
                <Input placeholder="Create password" />
                <Input placeholder="Confirm your password" />
              </>
            )}
          </div>
          {value === "email" ? (
            <Button
              arrow
              className={style.button}
              onClick={() => setValue("password")}
            >
              Continue
            </Button>
          ) : (
            <Button
              arrow
              className={style.button}
              // onClick={() => setValue("email")}
            >
              Change
            </Button>
          )}
        </form>
        <div className={style.img}>
          <img src={img} alt="img" />
          <img src={img_mob} alt="img_mob" />
        </div>
      </Section>
    </div>
  );
};
