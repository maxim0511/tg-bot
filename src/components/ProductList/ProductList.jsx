import { useTelegram } from "../../hooks";
import { ProductItem } from "../ProductItem";
import "./ProductList.css";
import { products } from "./mock";
import { getTotalPrice } from "./getTotalPrice";

export const ProductList = () => {
  const { TELEGRAM, queryId } = useTelegram();

  const [addedItems, setAddedItems] = useState([]);

  const onSendData = useCallback(() => {
    const data = {
      products: addedItems,
      totalPrice: getTotalPrice(addedItems),
      queryId,
    };
    fetch("http://63.169.126.179:8000/web-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }, [addedItems.length]);

  useEffect(() => {
    TELEGRAM.onEvent("mainButtonClicked", onSendData);
    return () => TELEGRAM.offEvent("mainButtonClicked", onSendData);
  }, [onSendData]);

  const onAdd = (item) => {
    const alreadyAdded = addedItems.find((i) => i.id === item.id);
    let newItems = [];

    newItems = alreadyAdded
      ? addedItems.filter((i) => i.id !== item.id)
      : [...addedItems, item];

    setAddedItems(newItems);

    if (!!newItems.length) {
      TELEGRAM.MainButton.show();
      TELEGRAM.MainButton.setParams({
        text: `Купить ${getTotalPrice(newItems)}`,
      });
    } else {
      TELEGRAM.MainButton.hide();
    }
  };

  return (
    <div className="list">
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className="item" />
      ))}
    </div>
  );
};
