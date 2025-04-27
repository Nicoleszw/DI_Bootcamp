export type User = {
    type: 'user';
    name: string;
    age: number;
  };
  
  export type Product = {
    type: 'product';
    id: number;
    price: number;
  };
  
  export type Order = {
    type: 'order';
    orderId: string;
    amount: number;
  };
  
  function isUser(obj: any): obj is User {
    return obj && obj.type === 'user' && 'name' in obj && 'age' in obj;
  }
  
  function isProduct(obj: any): obj is Product {
    return obj && obj.type === 'product' && 'id' in obj && 'price' in obj;
  }
  
  function isOrder(obj: any): obj is Order {
    return obj && obj.type === 'order' && 'orderId' in obj && 'amount' in obj;
  }
  
  export function handleData(data: (User | Product | Order)[]): string[] {
    return data.map(item => {
      if (isUser(item)) {
        return `Hello, ${item.name}! You are ${item.age} years old.`;
      } else if (isProduct(item)) {
        return `Product #${item.id} costs $${item.price}.`;
      } else if (isOrder(item)) {
        return `Order ${item.orderId} has an amount of $${item.amount}.`;
      } else {
        return 'Unknown data type.';
      }
    });
  }
  
  // Test
  const mixedData: (User | Product | Order | any)[] = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 25.99 },
    { type: 'order', orderId: 'ORD123', amount: 150 },
    { type: 'something-else' }
  ];
  
  const results = handleData(mixedData);
  console.log(results);
  