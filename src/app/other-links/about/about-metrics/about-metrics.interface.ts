export interface AboutMeMetrics {
  itExperience: Metric;
  hoursOfSupport: Metric;
  numberOfTechUsed: Metric;
  certificatesEarned: Metric;
}

export interface Metric {
  count: number;
  description: string;
  svgImage: string; // Assuming SVGImage is a string representing the SVG image path or content
}
