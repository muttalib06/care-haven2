"use client";
import { getSingleCaregiver } from "@/data-handling/getSingleCaregiver";
import React, { useEffect, useState } from "react";

const useCaregiverDetails = (id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await getSingleCaregiver(id);
        setData(result);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, isLoading, error };
};

export default useCaregiverDetails;
