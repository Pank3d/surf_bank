import style from "./section-notifications.module.scss";
import { Notification } from "@/widgets";

export const SectionNotifications = () => (
  <div className={style.notifications}>
    <Notification
      title="Secure your account with google authenticator"
      description="Two-Factor Authentication adds an extra layer of security to your account. To log into your
  account you will need to enter a 6-digit code."
      buttonText="Enable"
    />
    <Notification
      description="Please complete the sign-up process by passing a KYC/KYB check to
gain access to all Delos Banking services."
      color="orange"
      buttonText="Continue"
    />
  </div>
);
