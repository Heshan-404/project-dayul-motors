/* eslint-disable react/prop-types */
import { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import image from "../../../assets/Project Images/Dayul Motors/Categories/Bearing.jpg";

export default function Background(props) {
  const [itemData, setItemData] = useState([
    {
      id: "1",
      name: "Bearing",
      brand: "Bajaj",
      desc: "High-quality bearings for smooth operation",
      price: 3000,
      image: image,
      availableQuantity: 15,
      category: "Electrical Parts",
    },
    {
      id: "2",
      name: "Spark Plug",
      brand: "Bajaj",
      desc: "Reliable spark plugs for optimal ignition",
      price: 1500,
      image: image,
      availableQuantity: 20,
      category: "Electrical Parts",
    },
    {
      id: "3",
      name: "Oil Filter",
      brand: "Bajaj",
      desc: "Premium oil filters for engine protection",
      price: 800,
      image: image,
      availableQuantity: 10,
      category: "Engine Parts",
    },
    {
      id: "4",
      name: "Motorcycle Helmet",
      brand: "Bajaj",
      desc: "Safe motorcycle helmet",
      price: 5000,
      image: image,
      availableQuantity: 12,
      category: "Engine Parts",
    },
    {
      id: "5",
      name: "Motorcycle Jacket",
      brand: "Bajaj",
      desc: "Protective and comfortable motorcycle jacket",
      price: 3500,
      image: image,
      availableQuantity: 15,
      category: "Engine Parts",
    },
    {
      id: "6",
      name: "Motorcycle Gloves",
      brand: "Bajaj",
      desc: "Durable and grippy motorcycle gloves",
      price: 1200,
      image: image,
      availableQuantity: 15,
      category: "Fuel System Parts",
    },
    {
      id: "7",
      name: "Motorcycle Gloves",
      brand: "NOK",
      desc: "Durable and grippy motorcycle gloves",
      price: 1200,
      image: image,
      availableQuantity: 15,
      category: "Fuel System Parts",
    },
    // Add more items as needed...
  ]);

  const noCategory = props.cat === undefined;

  // Filter and sort items by category and name
  const filteredItems = itemData
    .filter((item) => noCategory || item.category === props.cat)
    .sort((a, b) => a.name.localeCompare(b.name));

  // Handle item click to remove the clicked item
  const handleItemClick = (id) => {
    setItemData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <>
      <div
        className="container"
        style={{ marginBottom: "200px", marginLeft: "250px", margin: "1px" }}
      >
        <div className="row row-cols-2 row-cols-md-4 g-4">
          {filteredItems.map((item, index) => (
            <div className="col" key={index}>
              <ItemCard
                id={item.id}
                name={item.name}
                brand={item.brand}
                desc={item.desc}
                price={item.price}
                image={item.image}
                onClick={handleItemClick} // Pass the onClick handler
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
