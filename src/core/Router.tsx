import * as React from "react";
import * as ReactDOM from "react-dom";
import { createHashRouter, Router } from "react-router-dom";
import App from "../App";
import { Diary } from "../component/diary";
import { Footmark } from "../component/footmark";
import { Me } from "../component/me";
import {AddFootmark} from "../component/addFootmark";
const router = createHashRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: "footmark",
          element: <Footmark />,
        },
        {
          path: "add-footmark",
          element: <AddFootmark />,
        },
        {
            path: "diary",
            element: <Diary />
        },{
            path: "me",
            element: <Me />
        }
      ]
    }
  ]);

  export { router }