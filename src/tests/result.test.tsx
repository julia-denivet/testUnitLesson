import Result from "../components/Result";
import { act } from '@testing-library/react-hooks';
import ReactDOM from "react-dom";


let container: any;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

    test('Should render result without crash', () => {
        act(() =>{
            ReactDOM.render(<Result value="toto"/> 
            , container);
        });

        const resultDiv = container.querySelector(".result");

        expect(resultDiv.textContent).toBe('toto');


});