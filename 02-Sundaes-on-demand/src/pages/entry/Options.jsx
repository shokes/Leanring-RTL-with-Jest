import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import ToppingsOption from './ToppingsOption';
import ScoopOption from './ScoopOption';
import AlertBanner from '../common/AlertBanner';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingsOption;

  const optionsItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionsItems}</Row>;
}
