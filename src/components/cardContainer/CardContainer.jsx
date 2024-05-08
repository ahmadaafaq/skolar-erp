import BasicCard from "../card/Card";

export default function CardContainer({ cardData }) {
  return (
    <div className="card-container">
      {cardData.map((card, i) => (
        <BasicCard key={i} img={card.img} title={card.title} />
      ))}
    </div>
  );
}
