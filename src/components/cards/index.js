import "./cards.css";

export const Cards = () => {
  return (
    <div className="cardsContainer">
      {cardsInfo.map((item, index) => (
        <div className="card" key={index}>
          {/* <img src={item.imgUrl} alt="icon"></img> */}
          {/* <i>{item.imgUrl}</i> */}
          <i className="image">&#xFF04;</i>
          <div>
            <p className="label">{item.label}</p>
            <p className="value">{item.value}</p>
            {item.isMonthRate ? (
              item.rateIncrease ? (
                <p>
                  <span className="rate rateIncrease">
                    <span>&#8593;</span>
                    {item.rateIncrease}
                  </span>
                  this month
                </p>
              ) : (
                <p>
                  <span className="rate rateDecrease">
                    &#8595;{item.rateDecrease}
                  </span>
                  this month
                </p>
              )
            ) : item.rateIncrease ? (
              <p>
                <span className="rate rateIncrease">
                  &#8593;{item.rateIncrease}
                </span>
                this week
              </p>
            ) : (
              <p>
                <span className="rate rateDecrease">
                  &#8595;{item.rateDecrease}
                </span>
                this week
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const cardsInfo = [
  {
    imgUrl: "&#xFF04;",
    label: "Earning",
    value: "$198k",
    rateIncrease: "37.8%",
    rateDecrease: "",
    isMonthRate: true,
  },
  {
    imgUrl: "",
    label: "Orders",
    value: "$2.4k",
    rateIncrease: "",
    rateDecrease: "2%",
    isMonthRate: true,
  },
  {
    imgUrl: "",
    label: "Balance",
    value: "$3k",
    rateIncrease: "3%",
    rateDecrease: "",
    isMonthRate: true,
  },
  {
    imgUrl: "",
    label: "Total Sales",
    value: "$89k",
    rateIncrease: "11%",
    rateDecrease: "",
    isMonthRate: false,
  },
];
