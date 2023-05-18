import { createHashRouter } from "react-router-dom";
import App from "../App";
import { Diary } from "../component/diary";
import { Footmark } from "../component/footmark";
import { Me } from "../component/me";
import {AddFootmark} from "../component/addFootmark";
import { ModifyPassCode } from '../component/modifyPassCode';

const router = createHashRouter([
    {
      path: '/',
      //todo 重定向到 footmark 路由
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
        }, {
          path: 'config',
          element: <ModifyPassCode />
        }
      ]
    }
  ]);

  export { router }