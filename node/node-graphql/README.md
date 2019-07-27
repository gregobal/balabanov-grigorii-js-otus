# GraphQL Server

Часть 1.
Написать схему GraphQL для примера веб-приложения e-commerce shop:
до 3 балла - какие сущности (минимум 3, можно больше), какие у них поля, какие обязательные какие нет
до 4 баллов - какие запросы/мутации понадобятся (минимум 4, можно больше)

Часть 2.
до 5 баллов - развернуть локально graphQL + nodejs или воспользоваться одним из веб демо (graphqlbin), 
перенести полностью или частично написанную в Части 1 схему.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```

### Сервис Playground 
доступен на http://localhost:4000/

### Примеры запросов 
```
query getProducts {
  getProducts {
    name
    category {
      name
    }
    description
  }
}

query getUser {
  getUser(id: "1") {
    name
    email
    orders {
      id
      products {
        name
        category {
          name
        }
        manufacturer {
          name
        }
      }
    }
  }
}

mutation newOrder($userId:ID!, $productIds:[ID!]!) {
  addOrder(userId: $userId, productIds: $productIds) {
    id
    customer {
      name
    }
    products {
      name
      manufacturer {
        name
      }     
    }
    created
  }
}

mutation newProduct($name:String!, $categoryId: ID!, $manufacturerId: ID!, $description: String) {
  addProduct(name: $name, categoryId: $categoryId, manufacturerId: $manufacturerId, description: $description) {
    id
    name
    category {
      name
    }
    manufacturer {
      name
    }
    description
  }
}
```
