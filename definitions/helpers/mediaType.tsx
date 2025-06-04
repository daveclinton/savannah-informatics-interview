import { Film, Tv, User } from "lucide-react";

export const getMediaTypeIcon = (mediaType: string) => {
  switch (mediaType) {
    case "movie":
      return <Film className="h-4 w-4" />;
    case "tv":
      return <Tv className="h-4 w-4" />;
    case "person":
      return <User className="h-4 w-4" />;
    default:
      return <Film className="h-4 w-4" />;
  }
};

export const getMediaTypeColor = (mediaType: string) => {
  switch (mediaType) {
    case "movie":
      return "bg-primary text-primary-foreground";
    case "tv":
      return "bg-secondary text-secondary-foreground";
    case "person":
      return "bg-accent text-accent-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const getMediaTypeLabel = (mediaType: string) => {
  switch (mediaType) {
    case "movie":
      return "Movie";
    case "tv":
      return "TV Show";
    case "person":
      return "Person";
    default:
      return "Unknown";
  }
};
