import React from "react";
import { IFeedback } from "../types";

const toRatings = (feedback: IFeedback[] | undefined) => {
  if (!feedback) return 0;
  if (feedback.length === 1) return feedback[0].rating;

  let avgRatings = 0;
  feedback.forEach((feedback: IFeedback) => {
    avgRatings += feedback.rating;
  });

  return avgRatings / 5;
};

export default toRatings;
