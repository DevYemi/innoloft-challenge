import { ProductDataType, CatBusTRLType } from '@/redux-toolkit/types';

export interface ProductSectionTypes {
    page: "product" | "edit-product"
}

export type ChangesType = "Add" | "Remove"
export type formDetailsType = { list?: CatBusTRLType[], inputValue: string, value?: string, }