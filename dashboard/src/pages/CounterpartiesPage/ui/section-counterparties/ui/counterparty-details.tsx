import style from "./counterparty-details.module.scss";

interface Props {
  profileType: string;
  counterpartyEmail: string;
  counterPartyWebsite: string;
  companyName: string;
  lineOfBusiness: string;
  country: string;
}

export const CounterpartyDetails = ({
  profileType,
  counterpartyEmail,
  counterPartyWebsite,
  companyName,
  lineOfBusiness,
  country,
}: Props) => {
  const arrList: {
    title: string;
    value: string;
  }[] = [
    {
      title: "profile type",
      value: profileType,
    },
    {
      title: "counterparty email",
      value: counterpartyEmail,
    },
    {
      title: "counterparty website",
      value: counterPartyWebsite,
    },
    {
      title: "company Name",
      value: companyName,
    },
    {
      title: "line of business",
      value: lineOfBusiness,
    },
    {
      title: "Country",
      value: country,
    },
  ];

  return (
    <ul className={style.list}>
      {arrList.map(({ title, value }, index) => (
        <li key={index} className={style.list__item}>
          <span className={style.list__title}>{title}:</span>
          <span className={style.list__value}>{value}</span>
        </li>
      ))}
    </ul>
  );
};
