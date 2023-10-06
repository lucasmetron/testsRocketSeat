import { render } from "@testing-library/react";
import ActiveLink from "./index";

describe("ActiveLink componente", () => {
  //esse describe coloca todos estes testes dentro de um grupo e fica mais favil de visualizar esse grupo no prompt
  test("active link renders correctly", () => {
    //também pode ser it("active link renders correctly") isso ajuda na semantica
    const { debug, getByText } = render(<ActiveLink />);
    //debug = cria um componente virtual e printa no prompt
    //getByText = recebe o texto e procura isso dentro do compo

    debug();

    expect(getByText("teste2024")).toBeInTheDocument(); //aqui espera que tenha o texto 'teste2024' dentro do componente
  });

  test("active link isreceiving active class ", () => {
    const { debug, getByText } = render(<ActiveLink name={"active"} />); //aqui passamos a classe active
    debug();

    expect(getByText("teste2024")).toHaveClass("active"); //aqui estamos procurando na div do teste2024 se existe uma classe active
  });
});
