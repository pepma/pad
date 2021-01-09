export interface ApodDTO {
  copyright?: string;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
}

export interface Apod {
  date?: string;
  explanation?: string;
  mediaType?: string;
  title?: string;
  url?: string;
}

export interface APODConfig {
  url?: string;
  apiKey?: string;
}
