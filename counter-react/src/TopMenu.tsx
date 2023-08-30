import { useState } from "react";

type TopMenuProps = {
  items: string[];
  title: string;
};

function TopMenu(props: TopMenuProps) {
  const items = props.items;
  const title = props.title;

  const [selectedItem, setSelectedItem] = useState("");

  function handleItemClick(key: string) {
    setSelectedItem(key);
  }

  return (
    <div className="top-menu">
      <h5>{title}</h5>
      {items.map((item) => (
        <a
          onClick={() => handleItemClick(item)}
          style={{ backgroundColor: selectedItem === item ? "red" : "gray" }}
        >
          {item}
        </a>
      ))}
    </div>
  );
}

export default TopMenu;
