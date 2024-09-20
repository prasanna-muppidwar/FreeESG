"use client";
import React, { useEffect, useState } from 'react';
import { Button } from "../../components/ui/button";
// import Styles from "./Insights.module.css";
import Link from 'next/link';
import RootLayout from '../Dashboard/layout';

const Insights = () => {
  const [insights, setInsights] = useState<any>(null);

  useEffect(() => {
    const storedInsights = localStorage.getItem('insights');
    console.log(storedInsights)
    if (storedInsights) {
      setInsights(JSON.parse(storedInsights));
    }
  }, []);

  return (
    <RootLayout>
    <div className={""}>
      <h1 className={`text-3xl font-bold text-center ${""}`}>Insights</h1>
      {insights && (
        <div className={""}>
          {Object.entries(insights).map(([key, value]) => (
            <div key={key} className={""}>
              <h3 className={""}>{key}</h3>
              <p className={""}>{value as string}</p>
            </div>
          ))}
          {/* {insights} */}
        </div>
      )}
      <div className={""}>
        <Link href="/response">
          <Button className={`mt-4 mx-2 ${""}`}>
            Back to Response
          </Button>
        </Link>
      </div>
    </div>
    </RootLayout>
  );
};

export default Insights;