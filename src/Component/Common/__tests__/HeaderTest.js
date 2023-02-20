import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event';
import Header from "../Header/Header";
describe('測試Button是否正常', () => {
  test('當按下按鈕時，確定 mockFunc 會被呼叫', () => {
    const mockFunc = jest.fn(); // 宣告一個模擬用的函式
    render( // 將 TodoButton 渲染出來，因為之後才可以被抓得到
      <Header
        onButtonClick={mockFunc}
      />
    );

    const toLoginButton = screen.getByText('Login') // 在這邊「 Add todo 」是 TodoButton 裡面的內容
    userEvent.click(toLoginButton); // 模擬使用者的點擊行為
    expect(mockFunc).toBeCalledTimes(1); // 去預測函式是否真的因為點擊而被呼叫
  });
});