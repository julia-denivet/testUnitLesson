// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
  rest.get(
    "https://prevision-meteo.ch/services/json/aix-en-provence",
    (req, res, ctx) => {
      return res(
        ctx.json({
          current_condition: {
            icon_big:
              "https://prevision-meteo.ch/style/images/icon/nuit-legerement-voilee-big.png",
          },
        })
      );
    }
  )
);

const serverUser = setupServer(
  rest.get(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      return res(
        ctx.json({
          current_condition: {
            user_picture: "https://static1.purebreak.com/articles/4/20/57/84/@/739436-one-piece-l-actrice-tanaka-mayumi-luf-diapo-1.jpg",
            user_title: "Mme",
            user_firstname: 'Julia',
            user_lastname: 'Denivet', 
          },
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


// test('loads and displays greeting', async () => {
//   render(<Fetch url="/greeting" />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await waitFor(() => screen.getByRole('heading'))

//   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
//   expect(screen.getByRole('button')).toBeDisabled()
// })


test("load meteo mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Météo actuel/i));
  expect(container.getElementsByTagName("img").length).toBe(1);
});


