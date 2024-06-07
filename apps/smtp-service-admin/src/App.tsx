import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmailConfigList } from "./emailConfig/EmailConfigList";
import { EmailConfigCreate } from "./emailConfig/EmailConfigCreate";
import { EmailConfigEdit } from "./emailConfig/EmailConfigEdit";
import { EmailConfigShow } from "./emailConfig/EmailConfigShow";
import { EmailTokenList } from "./emailToken/EmailTokenList";
import { EmailTokenCreate } from "./emailToken/EmailTokenCreate";
import { EmailTokenEdit } from "./emailToken/EmailTokenEdit";
import { EmailTokenShow } from "./emailToken/EmailTokenShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SmtpService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EmailConfig"
          list={EmailConfigList}
          edit={EmailConfigEdit}
          create={EmailConfigCreate}
          show={EmailConfigShow}
        />
        <Resource
          name="EmailToken"
          list={EmailTokenList}
          edit={EmailTokenEdit}
          create={EmailTokenCreate}
          show={EmailTokenShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
