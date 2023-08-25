import { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios";

export type MenuData = {
  name: string;
  logo: string;
  detail: string;
};

export default function ItemContainer() {
  const [myMenuData, setMyMenuData] = useState<MenuData[]>([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_MENU_API)
      .then(response => {
        console.log(response);
        setMyMenuData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className='pt-4'>
      <div className='container px-lg-5'>
        <div className='row gx-lg-5'>
          {myMenuData.map((item: MenuData, index) => {
            return <Item key={index} name={item.name} logo={item.logo} detail={item.detail} />;
          })}
        </div>
      </div>
    </section>
  );
}
