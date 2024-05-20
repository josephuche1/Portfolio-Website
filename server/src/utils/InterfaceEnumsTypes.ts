// Enum for server response status
export enum EServerResponseStatus {
    SUCCESS="success",
    ERROR="error",
    NOT_FOUND="not found",
    NO_PROJECTS="no projects"
}

// Interface for the project
export interface IProject {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
}

export interface IImage {
    image: string;
}