import BasicCard from "../card/Card";

export default function CardContainer({ cardData }) {
  return (
    <div className="card-container">
      {cardData.map((card, i) => (
        <BasicCard key={i} cardData={card} />
      ))}
    </div>
  );
}
