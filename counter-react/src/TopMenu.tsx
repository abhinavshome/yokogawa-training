import { useState } from "react";

function TopMenu() {
  const items = ["Home", "About", "Contact", "Careers", "Support"];
  const [selectedItem, setSelectedItem] = useState("");

  function handleItemClick(key: string) {
    setSelectedItem(key);
  }

  return (
    <div className="top-menu">
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
