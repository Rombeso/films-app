import { TopLevelCategory, TopPageModal } from '../../interfaces/page.intarface'
import { ProductModel } from '../../interfaces/product.interface'

export interface TopPageŠ”omponentProps extends Record<string, unknown> {
    firstCategory: TopLevelCategory
    page: TopPageModal
    products: ProductModel[]
}