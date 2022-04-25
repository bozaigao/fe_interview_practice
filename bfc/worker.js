function bigNumberAdd(number1, number2) {

    let result = "", // 保存最后结果
      carry = false; // 保留进位结果

    // 将字符串转换为数组
    number1 = number1.split("");
    number2 = number2.split("");

    // 当数组的长度都变为0，并且最终不再进位时，结束循环
    while (number1.length || number2.length || carry) {

      // 每次将最后的数字进行相加，使用~~的好处是，即使返回值为 undefined 也能转换为 0
      carry += ~~number1.pop() + ~~number2.pop();

      // 取加法结果的个位加入最终结果
      result = carry % 10 + result;

      // 判断是否需要进位，true 和 false 的值在加法中会被转换为 1 和 0
      carry = carry > 9;
    }

    // 返回最终结果
    return result;
  }

  console.log(bigNumberAdd("123456789123456789123456789", "987654321987654321987654321987654321987654321"));