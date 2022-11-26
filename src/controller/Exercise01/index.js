import { useState } from 'react';
import { discountRules } from '../../dummyData';

const useExercise01Controller = () => {
  const [cart, setCart] = useState([{
      id: 1,
      name: 'Star Wars',
      price: 20,
      quantity: 2
    }]);
  
  const addCart = (item) => {
    if (cart.find(movie => movie.id === item.id)) return;
    setCart([
      ...cart,
      {
        ...item,
        quantity: 1
      }
    ]);
  };

  const incrementQuantity = (index) => {
    const auxList = [...cart];
    auxList[index].quantity += 1;
    setCart(auxList);
  };

  const decrementQuantity = (index) => {
    const auxList = [...cart];
    auxList[index].quantity -= 1;
    auxList[index].quantity === 0 && auxList.splice(index, 1);
    setCart(auxList);
  };

  const getTotal = () => {
    if (cart.length === 0) return 0;
    const sumCart = cart.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);
    const ids = cart.map(item => item.id);
    let discount = 0;
    discountRules.forEach((dRule) => {
      let matchCounter = 0;
      dRule.m.forEach((mItem) => {
        const existsItem = ids.includes(mItem);
        if (existsItem) {
          matchCounter++;
        }
      });
      if (matchCounter === dRule.m.length) {
        discount = dRule.discount > discount ? dRule.discount : discount;
      };
    });
    console.info("final discount", discount);
    const total = discount > 0 ? sumCart - (sumCart * discount) : sumCart;
    return total;
  };

  return {
    addCart,
    incrementQuantity,
    decrementQuantity,
    getTotal,
    cart
  };
};

export default useExercise01Controller;