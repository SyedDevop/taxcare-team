import React, { useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import { useDb, useAuth } from "@/Hooks";
import { ExistingUserOrder } from "@/Type";

import OrdersLIst from "./Components/OrdersLIst";
import UploadDoc from "./Components/UploadDocuments/UploadDoc";
import Settings from "./Components/Settings/Settings";

import "./Dashboard.scss";

const Dashboard = () => {
  const { orderById } = useDb();
  const { user } = useAuth();
  const [orderList, setOrderList] = useState<Array<ExistingUserOrder>>([]);
  const userId = user?.uid || "not";

  useEffect(() => {
    const getALlOrderList = async () => {
      console.log("called");

      try {
        const orderQuery = await orderById(userId);
        setOrderList(
          orderQuery.docs.map(
            (doc) => ({ ...doc.data() }) as ExistingUserOrder,
          ),
        );
      } catch (err) {
        console.error(err);
      }
    };
    getALlOrderList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(orderList);

  return (
    <section id="dashboard">
      <div>
        <Tabs selectedTabClassName="tab-active">
          <nav>
            <div className="container custom-container">
              <TabList>
                <Tab>my order</Tab>
                <Tab>upload</Tab>
                <Tab>setting</Tab>
              </TabList>
            </div>
          </nav>
          <div className="container custom-container m-3em">
            <TabPanel>
              <OrdersLIst list={orderList} />
            </TabPanel>
            <TabPanel>
              <UploadDoc />
            </TabPanel>
            <TabPanel>
              <Settings />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Dashboard;
