export default function Link(cardData) {
  return (
    <li>
      <a>{`${cardData.name2} - ${cardData.name1}`}</a>
    </li>
  );
}
