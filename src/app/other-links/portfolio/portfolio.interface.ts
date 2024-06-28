// export interface portfolio {
//   projectName: string;
// }

export interface MyPortfolios {
  [key: string]: portfolio;
}


export interface portfolio {
  projectName: string;
  imageLink: string;
  progress: string;
  githubLink: string;
  projectURL: string;
  description: string;
  technologiesUsed: string;
  projectDate:string;
}