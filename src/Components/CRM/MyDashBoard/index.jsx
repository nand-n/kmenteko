import React from "react";
import ActualPipeline from "./ActualPipeline";
import ActualSales from "./ActualSales";
import PipelineDashboard from "./PipelineDashboard";

export default function index() {
  return (
    <div>
      <PipelineDashboard />
      <ActualPipeline />
      <ActualSales />
    </div>
  );
}
