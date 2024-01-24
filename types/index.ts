import { MouseEventHandler, ReactNode } from "react";

export interface CarProps {
  message: ReactNode;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

// Update your SearchPostCodePropstest interface
export interface SearchPostCodePropstest {
  postal_code: string;
  setPostal_code: (postal_code: string) => void;
}

// sdfsdfsdfsf

export interface CarProps2 {
  message: ReactNode;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps2 {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  cityMPG: number;
}

export interface FilterProps2 {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
  transmission?: string;
}

export interface HomeProps2 {
  searchParams: FilterProps2;
}

export interface HomePropstest {
  searchParams: FilterPropstest;
}


export interface CarPropstest {
  agent_rating: number;
  person_name: string;
  postal_code: string;
}

export interface FilterPropstest {
  agent_rating?: number;
  person_name?: string;
  postal_code?: string;
}



// interfaces.js

export interface CheckboxOption {
  label: string;
  value: string;
}

export interface AccordionSection {
  label: string;
  options: CheckboxOption[];
}

export interface DropdownSection {
  label: string;
  options: CheckboxOption[];
}

export interface CustomAccordionProps {
  sections: (AccordionSection | DropdownSection)[];
}


export const servicesOptions: CheckboxOption[] = [
  { label: 'Virtual tours', value: 'USA' },
  { label: 'Video tours', value: 'Germany' },
  { label: 'Free EPC', value: 'Spain' },
  { label: 'Premium listings', value: 'United Kingdom' },
  { label: 'Social media advertising', value: 'United Kingdom2' },
  { label: 'Rightmove listing', value: 'United Kingdom3' },
];

export const onlineOptions: CheckboxOption[] = [
  { label: 'Online', value: 'USA5' },
  { label: 'Offline', value: 'Germany4' },
];
export const saletimeOptions: CheckboxOption[] = [
  { label: 'less than a month', value: 'USA5' },
  { label: '1-3 months', value: 'Germany4' },
  { label: '3-6 months', value: 'Germany4' },
  { label: '6 months +', value: 'Germany4' },
];
export const saleOptions: CheckboxOption[] = [
  { label: 'All', value: 'USasdA5' },
  { label: 'Online', value: 'USA5' },
  { label: 'Offline', value: 'Germany4' },
];
export const soldamountOptions: CheckboxOption[] = [
  { label: '1 sold', value: 'USA5' },
  { label: '5 sold', value: 'Germsdfany4' },
  { label: '10 sold', value: 'USdsfA5' },
  { label: '20 sold', value: 'Germadsfny4' },
  { label: '50 sold', value: 'USAsdf' },
  
];
export const listingOptions: CheckboxOption[] = [
  { label: 'Online', value: 'USA5' },
  { label: 'Offline', value: 'Germany4' },
];
export const ratingsOptions: CheckboxOption[] = [
  { label: 'Online', value: 'USA5' },
  { label: 'Offline', value: 'Germany4' },
];