
export type ImageItem = {
    id: string;
    url: string;
    timestamp: number;
  }
  
  export type GalleryGridProps = {
    images?: ImageItem[];
    getAllImages: () => void;
  }

  export type KeleyaProviderProps = {
    children: React.ReactNode;
  };
  

  
  export type File = {
    uri: string;
    type: string;
    name: string;
  };
  
  export type APIResponse = {
    status: string;
    result: ImageItem[];
  };
  
  export type KeleyaContextType = {
    name: string;
    setUsername: (user : string) => void;
  
  };
  
  export type AppStackParamList = {
    GalleryApp: undefined;
    ImageDetails: {
      image: ImageItem;
    };
  };