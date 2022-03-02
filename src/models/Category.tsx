export interface RealmCategory {
  id: string;
  name: string;
  color: string;
}

export const CATEGORY_DB_NAME: string = 'Category';

export default class Category implements RealmCategory {
  id: string;
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.id = String(Math.random());
    this.color = color;
  }

  toRealmCategory() {
    const ret: RealmCategory = {
      id: this.id,
      name: this.name,
      color: this.color,
    };
    return ret;
  }
}

export function realmCategoryToCategory(categoryData: RealmCategory): Category {
  const category: Category = new Category(
    categoryData.name,
    categoryData.color,
  );
  category.id = categoryData.id;
  return category;
}

export const RealmCategorySchema = {
  name: CATEGORY_DB_NAME,
  properties: {
    id: 'string',
    name: 'string',
    color: 'string',
  },
  primaryKey: 'id',
};
