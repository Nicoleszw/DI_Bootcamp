export interface Recipe {
    id: number;
    title: string;
    image: string;
  }
  
  export interface ApiState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
  }
  