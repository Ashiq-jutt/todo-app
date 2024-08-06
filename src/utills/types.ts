// Define a type of User Meta
export interface UserMetaType {
  _id?: string;
  category?: string;
  email?: string;
  fcm?: string;
  fullName?: string;
  organization?: string;
  organizationType?: string;
  isApproved?: boolean;
  isBlocked?: boolean;
  username?: string;
}
export interface SVGComponentProps {
  color?: string;
  height?: number;
  width?: number;
}
export interface FormValues {
  Name?: string;
  TelePhone?: number;
  City?: string;
  ZipCode?: any;
  Longitude?: number;
  Latitude?: number;
  password?: string;
  name?: string;
  email?: string;
}
export interface Category {
  _id: string;
  isLightSystem: boolean;
  name: string;
  organizationType: string;
  isAdded?: boolean;
  subCategories?: Subcategories[];
  length?: any;
}
export interface Organizations {
  _id:string;
  organization:OrganizationData
}
export interface Subcategories {
  _id?: string;
  category?: string | any;
  createdAt?: string;
  isCategoryAvailable?: boolean;
  name?: string;
  organization?: string;
  organizationType?: string;
  status?: string;
  updatedAt?: string;
  isAdded?: boolean;
  isSelected?: boolean;
}
export interface CategoryStatus {
  _id?: string;
  availability?: string;
  category?: Category;
  organization?: string;
  subOrganization?: string;
  subOrganizationType?: string;
  subCategories?: any;

}
export interface Organization {
  _id?: string;
  name?: string;
  email?: string;
  fcm?: string;
  homType?: string;
  isLoggedIn?: boolean;
  organizationType?: string;
  organizations?: Organization[] | [];
  organization?: string | OrganizationData | any;
}
export interface ChargeNurse {
  _id: string;
  email: string;
  fcm: string;
  isLoggedIn: boolean;
  isSignedIn: boolean;
  name: string;
  nurseSubCategories?: any[];
  organization?: string;
  organizationType: string;
  organizationData?: OrganizationData;
}
export interface OrganizationData {
  _id?: string;
  lat?: string;
  lng?: string;
  acuteBeds_HCRIS?: string;
  address?: string;
  beds_PSF?: string;
  city?: string;
  fips?: string;
  cbsa2020?: string;
  certifiedBeds_POS?: number;
  forhpRural_Urban2020?: string;
  hasSignedUp?: boolean;
  hospitalId?: string;
  isActive?: boolean;
  isDeleted?: boolean;
  name?: string;
  certifiedBeds?: number;
  telephone?: string;
  practiceAddressState?: string;
  mailingAddressState?: string;
  als?: boolean;
  criticalCare?: boolean;
  bls?: string;
  ground?: boolean;
  air?: string;
  interFacilityTransfer?: string;
  rucaCode?: string;
  specialPayment?: string;
  phoneNumber?: string;
  state?: string;
  updatedAt?: string;
  totalBeds_POS?: number;
  zipCode?: number;
  zipCoords?: { coordinates: any[]; type: string };
}

export interface SelectiveItem {
  _id?: string;
  organization?: string;
  name?: string;
  organizationType?: string;
  isAdded?: boolean;
  createdAt?: string;
  isLightSystem?: boolean;
  subCategories?: Array<any>;
}

export interface ScheduledNotification {
  _id?: any;
  title?: string;
  body?: string;
  type?: string;
  recieverType?: string;
  time?: any;
  monthlyOccurences?: any[];
  weeklyOccurences?: any[];
  systemDirector?: string;
}
declare global {
  interface Window {
    changeInterval: any;
  }
}
export interface Note {
  id?: string;
  _id: string;
  note: string;
  organization: string;
  organizationType: string;
  notesForNursingHome?: string;
  notesForEms?: string;
  notesForHospital?: string;
  success?: boolean;
  createdAt?: string;
  createdBy?:
  | {
    _id?: string;
    email?: string;
    createdAt?: string;
    fullName?: string;
  }
  | any;
}

export interface NursingHome {
  _id: string;
  address: string;
  certifiedBeds: string;
  city: string;
  hasSignedUp: boolean;
  interFacilityTransfer: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  state: string;
  phoneNumber: string;
  updatedAt: string;
  zipCode: number;
  zipCoords: { coordinates: any[]; type: string };
}

export interface Hospital {
  _id: string;
  acuteBeds_HCRIS: string;
  address: string;
  beds_PSF: string;
  city: string;
  fips: string;
  cbsa2020: string;
  certifiedBeds_POS: number;
  forhpRural_Urban2020: string;
  hasSignedUp: boolean;
  hospitalId: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  rucaCode: string;
  specialPayment: string;
  phoneNumber: string;
  state: string;
  updatedAt: string;
  totalBeds_POS: number;
  zipCode: number;
  isFavorite?: boolean;
  zipCoords: { coordinates: any[]; type: string };
}
export interface Ems {
  _id: string;
  air: string;
  als: string;
  bls: string;
  city: string;
  county: string;
  criticalCare: string;
  fixedWing: string;
  ground: string;
  hasSignedUp: boolean;
  interFacilityTransfer: string;
  isActive: boolean;
  isDeleted: boolean;
  name: string;
  mailingAddressState: string;
  practiceAddressState: string;
  telephone: string;
  updatedAt: string;
  zipCode: number;
  zipCoords: { coordinates: any[]; type: string };
}
export interface Notification {
  _id: string;
  category: Category;
  categoryAvailability?: string;
  createdAt?: string;
  me?: string;
  meType?: string;
  organization?: Organization;
  organizationType?: string;
  status?: string;
  type?: string;
  updatedAt?: string;
  scheduledNotification?: {
    _id?: any;
    title?: string;
    body?: string;
    type?: string;
    recieverType?: string;
    time?: any;
    monthlyOccurences?: any[];
    weeklyOccurences?: any[];
    systemDirector?: string;
  };
}

export interface Ads {
  _id?: string;
  email?: string;
  position?: string;
  subject?: string;
}

export interface States {
  _id: string;
  lat: number;
  lng: number;
  name: string;
}

export interface RegisterUser {
  password?: string;
  name?: string;
  email?: string;
}

export interface ProjectBody {
  _id: string;
  description: string;
  enabled?: boolean;
  name: string;
  type: string;
  icon: string;
}
export interface sortedFavOrgs {
  order?: string;
  organization?: string;
}
type categoryTypes = {
  __v?: number;
  _id?: string;
  createdAt?: string;
  isDefaultSelected?: boolean;
  isLightSystem?: boolean;
  name?: string;
  organizationType?: string;
  subCategories?: [];
  updatedAt?: string;
};
export interface categoryDataType {
  __v?: number;
  _id?: string;
  availability?: string;
  category?: categoryTypes;
  createdAt?: string;
  organization?: string;
  subOrganization?: string;
  subOrganizationType?: string;
  updatedAt?: string;
  previousStatus?: string
}

export interface StatusProps {
  onNegative?: any;
  onConfetti?: any;
  onConfettiStop?: any;
  currentStatus?: string;
  index?: number | any;
  showMore?: boolean;
  onPressUpdate?: any;
  onPressColapse?: () => void;
  showSubCategory?: boolean;
  onNotify?: any;
  onPressAddSubCategory?: () => void;
  categoryData: categoryDataType | any;
}
export interface EmsData {
  _id: string;
  categoryAvailability?: any[];
  city?: string;
  country?: string;
  distance?: number;
  isFavourite?: boolean;
  isFavorite?: boolean;
  state?: string;
  location?: any;
  name: string;
  zipCoords?: {
    coordinates: number[];
  };
}

export interface HospitalData {
  _id: string;
  categoryAvailability?: any[];
  city?: string;
  country?: string;
  distance?: number;
  isFavourite?: boolean;
  isFavorite?: boolean;
  acuteBeds_HCRIS?: string;
  address?: string;
  state?: string;
  location?: any;
  name: string;
  zipCoords?: {
    coordinates: number[];
  };
}

export interface NursingHomeData {
  _id: string;
  categoryAvailability?: any[];
  city?: string;
  country?: string;
  distance?: number;
  isFavourite?: boolean;
  isFavorite?: boolean;
  certifiedBeds?: string;
  address?: string;
  state?: string;
  location?: any;
  name: string;
  zipCoords?: {
    coordinates: number[];
  };
}

export interface Cluster {
  clusterId: number;
  coordinate: any;
  pointCount: number;
}
